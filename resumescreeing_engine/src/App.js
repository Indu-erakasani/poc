

// import React from 'react';
import React, { useState,useCallback} from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CandidateForm from './Frontend/CandidateForm.js';
import Writtentest from './Frontend/Writtentest.js';
import Questions from './Frontend/Questions.js';
import ResultPage from './Frontend/ResultPage.js'; // Import the correct file
import './App.css';
import AuthContainer from './AuthContainer.js'; 
// import { useCallback, useState } from 'react';
import { AuthContext } from "/home/indhu/Documents/RESOURCING-BOT/RESOURCING-BOT/resumescreeing_engine/resumescreeing_engine/src/Authcontext.js";


function App() {
  
const [token,setToken]=useState(false);
const [user,setUser]=useState(false);

 const candidateform=useCallback((user,token)=>{
  setToken(token);
  setUser(user);
 },[]);

  
  return (
    <Router>
      <div >
        <Routes>

        <Route path="/" element={<CandidateForm />} />
        <Route path="/Writtentest" element={<Writtentest />} />
        <Route path="/Questions" element={<Questions />} />
        <Route path="/ResultPage" element={<ResultPage />} />
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;



