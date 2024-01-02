
import { useState } from "react";
import  "/home/indhu/Documents/RESOURCING-BOT/RESOURCING-BOT/resumescreeing_engine/resumescreeing_engine/src/AuthContainer.scss";

import Candidateform from "./Frontend/CandidateForm.js";

import Test from "./Frontend/Writtentest";

const AuthContainer = () => {
  const [auth, setAuth] = useState({
    Candidateform: true,
    handleSubmission:true,
  });

// //   const [showPassword, setShowPassword] = useState(false);

// //   const handleTogglePassword = () => {
// //     setShowPassword(!showPassword);
// //   };

  const Candidateform = () => {
    setAuth({ ...auth, register: false, Candidateform: true });
  };

// //   const handleRegister = () => {
// //     setAuth({ ...auth, login: false, register: true });
// //   };

// //   const handleReset = () => {
// //     setAuth({ ...auth, login: false, reset: true });
// //   };

  return (
    <section className="--flex-center --100vh">
     {/* <div className="container box">
//         {auth.login && (
//           <Login
//             onRegister={handleRegister}
           
//             onShowPassword={showPassword}
//             onTogglePassword={handleTogglePassword}
//           />
//         )}
//         {auth.register && (
//           <Register
//             onLogin={handleLogin}
//             onShowPassword={showPassword}
//             onTogglePassword={handleTogglePassword}
//           />
//         )}
      
//       </div> */}
     </section>
  );
};

export default AuthContainer;

