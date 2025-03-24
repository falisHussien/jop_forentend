import React, { useState } from "react";
import axios from "axios";

const Apply = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    jobTitle: "",
    company: "",
    location: "",
    salary: "",
    type: "",
    coverLetter: "",
  });

  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("jobTitle", formData.jobTitle);
    form.append("company", formData.company);
    form.append("location", formData.location);
    form.append("salary", formData.salary);
    form.append("type", formData.type);
    form.append("coverLetter", formData.coverLetter);
    if (file) form.append("resume", file);

    try {
      const response = await axios.post("http://localhost:5000/apply", form, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Application Submitted!");
    } catch (error) {
      console.error(error);
      alert("Error submitting the application.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen  mt-16">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Job Application</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">
              Job Title
            </label>
            <input
              type="text"
              name="jobTitle"
              id="jobTitle"
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the job title"
              value={formData.jobTitle}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="company" className="block text-sm font-medium text-gray-700">
              Company
            </label>
            <input
              type="text"
              name="company"
              id="company"
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the company name"
              value={formData.company}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the job location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="salary" className="block text-sm font-medium text-gray-700">
              Salary
            </label>
            <input
              type="text"
              name="salary"
              id="salary"
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter expected salary"
              value={formData.salary}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="type" className="block text-sm font-medium text-gray-700">
              Job Type
            </label>
            <input
              type="text"
              name="type"
              id="type"
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter job type (e.g., Full-time)"
              value={formData.type}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700">
              Cover Letter
            </label>
            <textarea
              name="coverLetter"
              id="coverLetter"
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write a cover letter"
              value={formData.coverLetter}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
              Resume
            </label>
            <input
              type="file"
              name="resume"
              id="resume"
              className="w-full p-3 mt-1 border border-gray-300 rounded-md"
              onChange={handleFileChange}
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 mt-4 text-white bg-blue-500 hover:bg-blue-600 rounded-md"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default Apply;
