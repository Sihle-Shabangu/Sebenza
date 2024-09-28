// pages/jobs.js
import Header from "../components/header";

const JobList = () => {
    const jobs = [
        {
            id: 1,
            title: "Software Engineer",
            company: "Tech Solutions Inc.",
            location: "New York, NY",
            description: "Develop and maintain web applications using modern frameworks."
        },
        {
            id: 2,
            title: "Product Manager",
            company: "Innovatech",
            location: "San Francisco, CA",
            description: "Lead cross-functional teams to design and launch new products."
        },
        {
            id: 3,
            title: "Data Analyst",
            company: "Data Insights LLC",
            location: "Austin, TX",
            description: "Analyze complex data sets to help drive business decisions."
        },
        {
            id: 4,
            title: "UX/UI Designer",
            company: "Creative Minds",
            location: "Seattle, WA",
            description: "Design user-friendly interfaces and ensure a great user experience."
        },
        {
            id: 5,
            title: "Marketing Specialist",
            company: "MarketPro",
            location: "Chicago, IL",
            description: "Develop and implement marketing strategies to increase brand awareness."
        },
        {
            id: 6,
            title: "Project Coordinator",
            company: "BuildIt Corp.",
            location: "Denver, CO",
            description: "Coordinate project activities and ensure timely completion."
        },
        {
            id: 7,
            title: "DevOps Engineer",
            company: "CloudTech",
            location: "Los Angeles, CA",
            description: "Manage infrastructure and deployment processes for applications."
        },
        {
            id: 8,
            title: "Sales Executive",
            company: "SalesForce",
            location: "Boston, MA",
            description: "Identify new business opportunities and maintain client relationships."
        },
    ];

    return (
        <div>
            <Header />
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6">Job Listings</h1>
            <div className="space-y-4">
                {jobs.map(job => (
                    <div key={job.id} className="border p-4 rounded shadow">
                        <h2 className="text-xl font-semibold">{job.title}</h2>
                        <p><strong>Company:</strong> {job.company}</p>
                        <p><strong>Location:</strong> {job.location}</p>
                        <p>{job.description}</p>
                        <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded">Apply Now</button>
                    </div>
                ))}
            </div>
        </div>
        </div>
        
    );
};

export default JobList;