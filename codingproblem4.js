// What is happening in the code below?  

// Assume that you have already installed ran npm install body-parser and ​npm install express-validator cors 


//validation.js
//the validation.js file, the check function from express-validator is imported. The file exports two validation middleware functions: signupValidation and loginValidation
//The signupValidation middleware checks if the name field is not empty, the email field is a valid email format, and the password field has a minimum length of 6 characters
const { check } = require('express-validator');
exports.signupValidation = [
   check('name', 'Name is requied').not().isEmpty(),
   check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
   check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
]
//loginValidation middleware checks if the email field is a valid email format and the password field has a minimum length of 6 characters
exports.loginValidation = [
    check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
    check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
]


//Server.js file
//Server.js file, the required modules (createError, express, path, body-parser, cors, and ./validation.js) are imported
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const { signupValidation, loginValidation } = require('./validation.js');
const app = express();
//Express application is created with express() and assigned to the app variable
//Middleware is set up using app.use for parsing JSON data, parsing URL-encoded data, and enabling CORS (Cross-Origin Resource Sharing)
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(cors());
//using app.get('/'), which responds with the message 'Node js file upload rest apis' when a GET request is made to the root URL
app.get('/', (req, res) => {
   res.send('Node js file upload rest apis');
});
// /register and /login. These routes correspond to the registration and login functionality of an application
app.post('/register', signupValidation, (req, res, next) => {
  // your registration code
  // signupValidation middleware is used as middleware for the /register route. This means that before the request reaches the route handler, the request body will be validated based on the rules defined in signupValidation
});
//loginValidation middleware is used as middleware for the /login route, validating the request body before reaching the route handler
app.post('/login', loginValidation, (req, res, next) => {
  // your login code
});
// Handling Errors
app.use((err, req, res, next) => {
   // console.log(err);
   // error handling middleware is set up using app.use. If any errors occur in the previous middleware or route handlers, this middleware will handle them. It sets the status code and responds with a JSON object containing the error message
   err.statusCode = err.statusCode || 500;
   err.message = err.message || "Internal Server Error";
   res.status(err.statusCode).json({
     message: err.message,
   });
});
//The server is set to listen on port 3000, and a message is logged to the console when the server starts
app.listen(3000,() => console.log('Server is running on port 3000'));
