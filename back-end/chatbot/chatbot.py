from flask import Flask, request
from twilio.twiml.messaging_response import MessagingResponse
# from helpers import generate_cv
import google.generativeai as genai
import os
import requests
from requests.auth import HTTPBasicAuth


app = Flask(__name__)

os.environ['TWILIO_SID'] = ''
os.environ['TWILIO_TOKEN'] = ''
key = os.getenv('GEMINI_API')
# Load the system instructions from a file
def get_system_string():
    with open('sys_instructions.txt', 'r') as file:
        return file.read()
    
# Set up the API key
genai.configure(api_key=key)

# Create the model
generation_config = {
  "temperature": 1,
  "top_p": 0.95,
  "top_k": 64,
  "max_output_tokens": 8192,
  "response_mime_type": "text/plain",

}

# set up the model
model = genai.GenerativeModel(
  model_name="gemini-1.5-pro",
  generation_config=generation_config,
  system_instruction=get_system_string(),
  tools=[],
  )
# Start a chat session
chat_session = model.start_chat(history=[],enable_automatic_function_calling=True)


def determine_media(request):
    num_media = int(request.values.get('NumMedia', 0))
    wa_id = request.values.get("WaId", "")

    if num_media > 0:
        media_type = request.values.get('MediaContentType0', '')
        media_url = request.values.get('MediaUrl0', '')

        try:
            response = requests.get(media_url, auth=HTTPBasicAuth(os.getenv("TWILIO_USERNAME"), os.getenv('TWILIO_PASSWORD')))
            response.raise_for_status()

            if 'image' in media_type:
                # Directly pass the image content to process_media
                return process_media(response.content)

            elif 'audio' in media_type:
                # Directly pass the audio content to process_media
                return process_media(response.content)

        except requests.RequestException as e:
            return "error", f"Request failed: {str(e)}", wa_id

    else:
        message = request.values.get('Body', '').lower() or request.json.get("postprocessed_text", [{}])[0].get("text", "")
        if not message:
            raise IndexError("No message content found.")
        return "text", message, wa_id




# Get the response from the model
def get_response(input_text,):
    
    response = chat_session.send_message(input_text)
    print(response.text)
    return response.text

# Send the response to the user
def send_message(message):

    bot_resp = MessagingResponse()
    msg = bot_resp.message()
    msg.body(message)
    return str(bot_resp)



def process_media(media_file):

    # Upload the file and print a confirmation.
  sample_file = genai.upload_file(path=media_file,
                              display_name="Sample image 1")

  print(f"Uploaded file '{sample_file.display_name}' as: {sample_file.uri}")

  file = genai.get_file(name=sample_file.name)
  print(f"Retrieved file '{file.display_name}' as: {sample_file.uri}")


  # Make the LLM request.
  print("Making LLM inference request...")
  response = model.generate_content([sample_file],
  request_options={"timeout": 600})
  print(response.text)
  return response


# Webhook for the bot
@app.route('/bot', methods=['POST'])
def webhook():
    print("in endpoint")
    try:
        type, message, user_id = determine_media(request)
        print(message)
        response = get_response(message)

        return send_message(response)
    
    except:
        return send_message("hmmm🤔 I seem to be down at the moment please try again in a few minutes.")

    


# running the app
if __name__ == '__main__':
    app.run(host='0.0.0.0',debug=True,port=5000)