import React from 'react';
import Footer from '../components/Footer'
import FeaturedJobs from '../components/FeaturedJobs'
import { Link } from 'react-router-dom';
import hiiVideo from "../assets/hii.mp4"
function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-end justify-start p-10">
  <video
    className="absolute inset-0 w-full h-full object-cover"
    autoPlay
    loop
    muted
  >
    <source src={hiiVideo} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="absolute inset-0 bg-black opacity-40"></div>
  <div className="z-10 px-6 md:px-12">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
      Join Us and Find Your Dream Job
    </h1>
    <p className="text-lg md:text-xl mb-6 text-white">
      Create your account and unlock thousands of job opportunities.
    </p>
    <Link to="login">
      <button className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg transition-colors">
        Sign Up Now
      </button>
    </Link>
  </div>
</section>


      {/* Featured Jobs Section */}
      <section className="py-16 bg-gray-100 animate__slideInLeft">
  <div className="container mx-auto text-center">
    <FeaturedJobs />
  </div>
</section>

<section className="py-16 bg-purple-500 text-white">
  <div className="container mx-auto text-center lg:text-left flex flex-col lg:flex-row-reverse items-center lg:items-start px-6 lg:px-20">
    {/* Image Section */}
    <div className="lg:w-1/2 mb-8 lg:mb-0 flex justify-center">
      <img
        src="https://cdn.britannica.com/84/203584-050-57D326E5/speed-internet-technology-background.jpg?w=600&q=60"  // Replace with your image URL
        alt="About Our Company"
        className="rounded-lg shadow-xl w-full h-96 max-w-md"
        // Adjust image size if needed
      />
    </div>

    {/* Text Section */}
    <div className="lg:w-1/2 px-6 lg:px-12">
      <h2 className="text-4xl font-semibold mb-6">About Our Company</h2>
      <p className="text-lg mb-4">
        At JobFinder, we are dedicated to bridging the gap between talented job seekers and the best companies in the industry. Our platform offers a seamless experience where job seekers can discover exciting career opportunities, while companies can find the perfect candidates to fit their needs.
      </p>
      <p className="text-lg mb-4">
        We prioritize transparency, ensuring that every job listing provides all the information necessary for informed decisions. Our goal is to simplify the job search process, making it easier for both job seekers and employers to connect and thrive together.
      </p>
      {/* <p className="text-lg mb-4">
        Our mission goes beyond just matching resumes to job descriptions. We create meaningful connections that foster growth, fulfillment, and success for both employees and employers.
      </p>
      <p className="text-lg mb-4">
        Whether you are a job seeker looking for your dream role or an employer looking for your next great hire, [Your Company Name] is here to make the process smooth, efficient, and rewarding.
      </p> */}
    </div>
  </div>
</section>



{/* Popular Job Categories Section */}
{/* Explore Technology Careers Section */}
<section className="py-16 bg-white animate__animated animate__fadeIn">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-semibold text-gray-800 mb-8">Explore Technology Careers</h2>
    <p className="text-lg text-gray-500 mb-8">
      Discover exciting career opportunities in the world of technology.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {/* Role 1 */}
      <div className="bg-indigo-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Software Developer</h3>
        <p className="text-lg text-gray-500">
          Design, build, and maintain applications that power businesses and life-changing innovations.
        </p>
      </div>
      {/* Role 2 */}
      <div className="bg-indigo-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Data Scientist</h3>
        <p className="text-lg text-gray-500">
          Analyze complex data to make informed decisions and create business insights.
        </p>
      </div>
      {/* Role 3 */}
      
      {/* Role 4 */}
      <div className="bg-indigo-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">UX/UI Designer</h3>
        <p className="text-lg text-gray-500">
          Enhance user experiences through intuitive and aesthetically pleasing designs.
        </p>
      </div>
    </div>
  </div>
</section>



      {/* Services Section */}
      <section className="py-16 bg-white nimate__animated animate__slideInLeft ">
  <div className="container mx-auto text-center ">
    <h2 className="text-4xl font-semibold text-gray-800 mb-8">Our Services</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <div className="bg-indigo-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Job Search</h3>
        <p className="text-lg text-gray-500">Find jobs that match your skills and interests easily.</p>
      </div>
      <div className="bg-indigo-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Company Profiles</h3>
        <p className="text-lg text-gray-500">Learn more about companies and what they offer.</p>
      </div>
      <div className="bg-indigo-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Job Alerts</h3>
        <p className="text-lg text-gray-500">Get notified about the latest job openings that match your profile.</p>
      </div>
    </div>
  </div>
</section>


      {/* Testimonials Section */}
<section className="py-16 bg-gray-200 animate__animated animate__slideInLeft">
  <div className="container mx-auto text-center px-6">
    <h2 className="text-4xl font-semibold text-gray-800 mb-8">What Our Users Say</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
      {/* Testimonial 1 */}
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full hover:shadow-2xl transition-shadow">
        <p className="text-lg text-gray-500">
          "This platform helped me find my dream job! The process was smooth and easy to navigate."
        </p>
        <div className="flex items-center mt-6 space-x-4">
          <img
            src="https://images.pexels.com/photos/1486064/pexels-photo-1486064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="w-12 h-12 rounded-full"
            alt="John Doe"
          />
          <div className="text-left">
            <h4 className="text-xl font-semibold text-gray-800">John Doe</h4>
            <p className="text-gray-400">Software Engineer</p>
          </div>
        </div>
      </div>
      {/* Testimonial 2 */}
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full hover:shadow-2xl transition-shadow">
        <p className="text-lg text-gray-500">
          "I love how easy it is to apply for jobs. I found the perfect opportunity in just a few days."
        </p>
        <div className="flex items-center mt-6 space-x-4">
          <img
            src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=1024x1024&w=is&k=20&c=iGtRKCTRSvPVl3eOIpzzse5SvQFfImkV0TZuFh-74ps="
            className="w-12 h-12 rounded-full"
            alt="Jane Smith"
          />
          <div className="text-left">
            <h4 className="text-xl font-semibold text-gray-800">Jane Smith</h4>
            <p className="text-gray-400">Product Manager</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Footer Section */}
      <Footer />
    </div>
  );
}
export default Home