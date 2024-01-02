
import {User} from "../models/users.js";
import express, { response } from 'express';
import bodyParser from 'body-parser';
import { sendToken } from "../utils/sendToken.js";
import { fileURLToPath } from 'url';
import * as path from 'path'; 
import * as fs from 'fs';

import cors from 'cors';
import { configDotenv } from "dotenv";
import { PythonShell } from 'python-shell';
// import * as Candidate from '../models/users.js';


const app = express();
app.use(cors());

app.use(cors({ credentials: true, origin: 'http://localhost:3000', }));

const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());

export const candidateform = async (req, res) => {
    try {
        const { Candidatename, Candidateemail } = req.body;
        let user = await User.findOne({ Candidateemail });
        if (user) {
            console.log("user:",user);
            return res.status(400).json({
                success:false,message: "Email already exists"
            

            });
        }
        user = await User.create({
          Candidatename,
          Candidateemail,
        });

        const token = user.getJWTToken(); // Generate JWT token
        sendToken(
            res,
            user,
            201,
            "Candidate Login successfully",
            token
        );
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
}






// export const handleSubmission = async (req, res) => {
//   try {
//     const { correctAnswers, totalQuestions } = req.body;

//     // Determine qualification based on your criteria
//     const qualified = correctAnswers >= 10;

//     // Update candidate details if qualified
//     if (qualified) {
//       await User.updateOne(
//         { _id: req.user._id }, // Assuming you have the user information available in req.user
//         {
//           $set: {
//             correctAnswers,
//             totalQuestions,
//             qualified: 'yes',
//           },
//         }
//       );
//     }

//     return res.status(200).json({
//       success: true,
//       message: 'Candidate details updated successfully',
//       data: {
//         correctAnswers: qualified ? correctAnswers : correctAnswers,
//         totalQuestions: qualified ? totalQuestions : 15,
//         qualified,
//       },
//     });
//   } catch (error) {
//     console.error('Error updating candidate details:', error.message);
//     return res.status(500).json({
//       success: false,
//       error: error.message,
//     });
//   }
// };




// export const handleSubmission = async (req, res) => {
//     try {
//       const { correctAnswers, totalQuestions } = req.body;
  
//       // Determine qualification based on your criteria
//       const qualified = correctAnswers >= 10;
  
//       // Update candidate details
//       const updatedUser = await User.findByIdAndUpdate(
//         req.user._id,
//         {
//           $set: {
//             correctAnswers,
//             totalQuestions,
//             qualified: qualified ? 'yes' : 'no',
//           },
//         },
//         { new: true }
//       );
  
//       if (!updatedUser) {
//         return res.status(404).json({
//           success: false,
//           message: 'User not found',
//         });
//       }
  
//       return res.status(200).json({
//         success: true,
//         message: 'Candidate details updated successfully',
//         data: {
//           correctAnswers: updatedUser.correctAnswers,
//           totalQuestions: updatedUser.totalQuestions,
//           qualified: updatedUser.qualified === 'yes',
//         },
//       });
//     } catch (error) {
//       console.error('Error updating candidate details:', error.message);
//       return res.status(400).json({
//         success: false,
//         error: error.message,
//       });
//     }
//   };
  

export const handleSubmission = async (req, res) => {
    
    console.log('Incoming request user:', req.user);
    console.log('Incoming request payload:', req.body);

    try {
      const { correctAnswers, totalQuestions } = req.body;
  
      // Determine qualification based on your criteria
      const qualified = correctAnswers >= 10;
  
      // Update candidate details
      const updatedUser = await User.findByIdAndUpdate(
        req.user,
        {
          $set: {
            correctAnswers,
            totalQuestions,
            qualified,
          },
        },
        { new: true }
      );
  
      if (!updatedUser) {
        return res.status(404).json({
          success: false,
          message: 'User not found',
        });
      }
  
      return res.status(200).json({
        success: true,
        message: 'Candidate details updated successfully',
        data: {
          correctAnswers: updatedUser.correctAnswers,
          totalQuestions: updatedUser.totalQuestions,
          qualified: updatedUser.qualified,
        },
      });
    } catch (error) {
      console.error('Error updating candidate details:', error.message);
      return res.status(400).json({
        success: false,
        error: error.message,
      });
    }
  };
  