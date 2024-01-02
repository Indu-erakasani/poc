// import express from "express";
// import User from "./routers/User.js";
// import cors from "cors";
// import cookieParser from "cookie-parser";
// import UserRouter from './routers/User.js';



//  const app = express();


// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());


// // app.use('/api', UserRouter);

// app.use(cors({
//      origin: 'http://localhost:3000',
//     // origin: '*',
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true, 
//   }));

//   // Define the test-auth route
//   // app.get('/test-auth', isAuthenticated, (req, res) => {
//   //   res.json({ message: "Authentication successful" });
//   // });

  


// app.use("/api", User);
// app.get("/", (req, res) => {
//     res.send("Server is running");
// });
// export { app };






import express from "express";
import User from "./routers/User.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// Enable CORS
app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));

// Middleware for parsing JSON and cookies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use("/api", User);

app.get("/", (req, res) => {
    res.send("Server is running");
});

export { app };
