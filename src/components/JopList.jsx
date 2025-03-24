import React, { useState } from "react";
import { Link } from "react-router-dom";

const JobList = () => {
    const [jobs, setJobs] = useState([
        { id: 1, title: "Software Engineer", company: "Tech Corp", location: "Remote", salary: "$80,000 - $120,000", type: "Full-Time" },
        { id: 2, title: "Web Developer", company: "Web Solutions", location: "New York, USA", salary: "$60,000 - $90,000", type: "Part-Time" },
        { id: 3, title: "Data Analyst", company: "Data Insights", location: "London, UK", salary: "$70,000 - $110,000", type: "Full-Time" },
        { id: 4, title: "UI/UX Designer", company: "Creative Minds", location: "Berlin, Germany", salary: "$50,000 - $85,000", type: "Contract" },
    ]);

    return (
        <div className="min-h-screen  text-white">
            <header className="p-8 text-center text-black">
                <h1 className="text-5xl font-extrabold mb-4 animate__animated animate__fadeIn animate__delay-1s">Job Listings</h1>
                <p className="text-lg max-w-xl mx-auto mb-8 animate__animated animate__fadeIn animate__delay-2s">
                    Find the perfect job for you from the top companies. Browse available roles and apply directly through our portal.
                </p>
            </header>

            <section className="p-8">
                <h2 className=" pb-14 text-4xl font-bold text-center animate__animated animate__fadeIn animate__delay-3s text-black">Available Jobs</h2>
                <ul className="space-y-6 max-w-3xl mx-auto ">
                    {jobs.map(job => (
                        <li key={job.id} className="bg-white text-gray-800 p-6 rounded-lg shadow-lg border border-gray-200">
                       <h3 className="text-2xl font-semibold text-blue-600 mb-2">{job.title}</h3>
                            <p className="text-gray-700 font-medium mb-1">{job.company} - {job.location}</p>
                            <p className="text-gray-500 mb-2">Salary: {job.salary}</p>
                            <p className="text-sm text-gray-500 mb-4">Type: {job.type}</p>
                            <Link to="/apply">
                                <button className="px-6 py-3 bg-green-500 hover:bg-green-700 rounded-lg text-lg transition-colors">
                                    Apply Now
                                </button>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>

            <footer className="bg-gray-900 text-center text-white py-4">
                <p>&copy; 2025 Job Portal. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default JobList;
