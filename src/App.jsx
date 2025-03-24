import { Route, Router, Routes } from "react-router-dom"
import Home from "./bages/Home"
import Header from "./components/Header"
import JobList from "./components/JopList"
import Contact from "./bages/Contact"
import AuthForm from "./bages/AuthForm"
import { useState } from "react"

import Apply from "./bages/Apply"
import Dashpourt from "./bages/Dashpour"
import ContactMessages from "./bages/Contacreadt"
import JobApplications from "./bages/ApplyR"
import Dashboard from "./bages/Dashboard"


function App() {
  const [isLogin, setIsLogin] = useState(true);
  return <div>
  
       <Header />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job-list" element={<JobList />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<AuthForm isLogin={isLogin} setIsLogin={setIsLogin} />}/>
        <Route path="/register" element={<AuthForm isLogin={!isLogin} setIsLogin={setIsLogin} />}/>
        <Route path="/apply" element={< Apply  />} />
        {/* <Route path="/view" element={< JobDetailsPage />} /> */}
        <Route path="/Dashpourt" element={< Dashpourt  />} />
        <Route path="/contactr" element={< ContactMessages  />} />
        <Route path="/Applyr" element={< JobApplications />} />
        <Route path="/dashboard" element={< Dashboard />} />
        
      </Routes>
   
         </div>
 
}

export default App
