// export const sendToken = (res, user, statusCode, message) => {
//     const token = user.getJWTToken();

//     const options = {
//         httpOnly: true,
//         expires: new Date(
//             Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
//         ),
//     };

//     const userData = {
//         _id: user._id,
//         name: user.name,
//         email: user.email,
//         phoneNumber: user.phoneNumber,
//         history: user.history,
//         verified: user.verified,

//     };
//     res.cookie('token', token, { httpOnly: true, secure: true });
    
//     res
//         .status(statusCode)
//         // .cookie("token", token, options)   
//         // .cookie('token', token, { httpOnly: true, secure: true })
 
//         .json({ success: true, message, user: userData, token:token});
// };



// export const sendToken = (res, user, statusCode, message) => {
//     try {
//         // Generate JWT token
//         const token = user.getJWTToken();

//         // Set cookie options
//         const options = {
//             httpOnly: true,
//             expires: new Date(
//                 Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
//             ),
//             secure: process.env.NODE_ENV === 'production', // Set to true in production for HTTPS
//         };

//         // Extract user data
//         const userData = {
//             _id: user._id,
//             name: user.name,
//             email: user.email,
//             phoneNumber: user.phoneNumber,
//             history: user.history,
//             verified: user.verified,
//         };

//         // Set the token as an HTTP-only cookie in the response
//         res.cookie('token', token, options);

//         // Send JSON response with user data, message, and token
//         res.status(statusCode).json({
//             success: true,
//             message,
//             user: userData,
//             token,
//         });
//     } catch (error) {
//         console.error('Error sending token:', error);
//         // Handle any error that may occur during token generation or response sending
//         res.status(500).json({ success: false, message: 'Internal Server Error' });
//     }
// };















export const sendToken = (res, user, statusCode, message) => {
    const token = user.getJWTToken();

    const options = {
        httpOnly: true,
        expires: new Date(
            Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
        ),
    };

    const userData = {
        _id: user._id,
        name: user.name,
        email: user.email,
        phoneNumber: user.phoneNumber,
        history: user.history,
        verified: user.verified,
    };

    res
        .status(statusCode)
        // .cookie("token", token, options)
        .header('token', token)

        .json({ success: true, message, user: userData,token});
};