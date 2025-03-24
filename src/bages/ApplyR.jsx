import React, { useEffect, useState } from "react";
import axios from "axios";
import Dashpour from "../bages/Dashpour";

const JobApplications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(''); // For handling errors

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get("http://localhost:5000/applyread");
        console.log("API Response:", response.data); // Debugging
        setApplications(response.data || []); // Update applications data
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching applications:", error);
        setError("Error fetching applications."); // Set error message if fetch fails
        setLoading(false); // Ensure loading is set to false even on error
      }
    };

    fetchApplications();
  }, []);

  return (
    <div>
      <div className=""> <Dashpour /> </div> 
      <div className="p-8 ml-52">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Job Applications</h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            <p className="text-gray-500 text-center">Loading applications...</p> // Show while loading
          ) : error ? (
            <p className="text-red-500 text-center">{error}</p> // Show if there's an error
          ) : applications.length > 0 ? (
            applications.map((app) => (
              <div
                key={app._id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-800">{app.jobTitle}</h3>
                <p className="mt-2 text-gray-600">
                  <strong>Name:</strong> {app.name}
                </p>
                <p className="mt-2 text-gray-600">
                  <strong>Email:</strong> {app.email}
                </p>
                <p className="mt-2 text-gray-600">
                  <strong>Cover Letter:</strong> {app.coverLetter}
                </p>

                {/* Display Resume file (if it's a PDF) directly on the page */}
                {app.resume && app.resume.endsWith(".pdf") && (
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold">Resume:</h4>
                    <embed
                      src={`http://localhost:5000/uploads/${app.resume}`}
                      width="100%"
                      height="500px"
                      type="application/pdf"
                      className="border border-gray-300 rounded-md"
                    />
                  </div>
                )}

                {/* If the resume is an image, display the image */}
                {app.resume && app.resume.match(/\.(jpeg|jpg|gif|png)$/) && (
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold">Resume:</h4>
                    <img
                      src={`http://localhost:5000/uploads/${app.resume}`}
                      alt="Resume"
                      width="100%"
                      className="border border-gray-300 rounded-md"
                    />
                  </div>
                )}

                {/* For other types of files (like Word documents), you can show a preview link or similar approach */}
                {app.resume && !app.resume.endsWith(".pdf") && !app.resume.match(/\.(jpeg|jpg|gif|png)$/) && (
                  <p className="mt-2 text-gray-600"><strong>Resume:</strong> {app.resume}</p>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">No applications found.</p> // Show if no applications
          )}
        </div>
      </div>
    </div>
  );
};

export default JobApplications;
