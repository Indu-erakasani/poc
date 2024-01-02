// import jwt from "jsonwebtoken";
// import {User} from "../models/users.js";
// import cors from "cors";

// export const isAuthenticated = async (req, res, next) => {
//     try {
//       const { token } = req.cookies;
//       if (!token) return res.status(400).json({ success: false, message: "Please login first to continue" });
  
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);
//        console.log('Decoded token:', decoded);
  
//       const user = await User.findById(decoded._id);
//        console.log('Found user:', user);
  
//       if (!user) {
//         return res.status(400).json({ success: false, message: "User not found" });
//       }
  
//       req.user = user;
//       next();
//     } catch (error) {
//       console.error('Authentication error:', error);
//       res.status(500).json({ success: false, message: error.message });
//     }
//   }
 




import jwt from 'jsonwebtoken';
import { User } from '../models/users.js';

// export const isAuthenticated = async (req, res, next) => {
//   try {
//     const token = req.cookies.token;
  

//     // console.log("Received Token:", req.cookies.token);
//     console.log(token)

//     if (!token) {
//       return res.status(401).json({ success: false, message: 'Unauthorized: No token provided' });
//     }

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     console.log("decoded token:",decoded);

//     const user = await User.findById(decoded._id);

//     if (!user) {
//       return res.status(401).json({ success: false, message: 'Unauthorized: Invalid token' });
//     }

//     req.user = user;
//     next();
//   } catch (error) {
//     console.error('Authentication error:', error);
//     return res.status(500).json({ success: false, message: 'Internal Server Error' });
//   }
// };


export const isAuthenticated = async (req, res, next) => {
  try {
    console.log('Headers:', req.headers);

    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(400).json({ success: false, message: 'Authorization header missing' });
    }

    const token = authHeader.split(' ')[1];

    console.log("token:",token);

    if (!token) {
      return res.status(400).json({ success: false, message: 'Invalid authorization header format' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);


    const user = await User.findById(decoded._id);

    if (!user) {
      return res.status(400).json({ success: false, message: 'User not found' });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error('Authentication error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};
