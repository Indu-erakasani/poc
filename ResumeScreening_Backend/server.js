
// import { app } from './app.js';
// import dotenv from 'dotenv';
// import { connectDatabase } from './config/database.js';
// import path from 'path';
// import url from 'url';
// import express from 'express';
// import { fileURLToPath } from 'url';
// import cors from 'cors';
// dotenv.config({
//     path: './config/config.env'
// });

// connectDatabase();

// const appInstance = express();

// // Get the absolute path to the /public directory within the jobsearch directory
// const publicPath = path.join(fileURLToPath(import.meta.url), '..', 'public');
// appInstance.use(cors({
//     origin: 'http://localhost:3000',
//     credentials: true,
   
//   }));

// appInstance.use('/resumes', express.static(publicPath));
// appInstance.use(app);
// appInstance.listen(process.env.PORT, () => {
//     console.log(`Server is running on port ${process.env.PORT}`);
// });





import { app } from './app.js';
import dotenv from 'dotenv';
import { connectDatabase } from './config/database.js';
import path from 'path';
import url from 'url';
import express from 'express';
import cors from 'cors';




dotenv.config({
    path: './config/config.env'
});

connectDatabase();

const appInstance = express();

appInstance.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
    exposedHeaders: ['Authorization'],
   
  }));

// appInstance.use('/resumes', express.static(publicPath));
appInstance.use(app);
appInstance.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
