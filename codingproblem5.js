// What is happening in the code below? Why is this important? What would you use mySQL for?  Can you give an example?  

// Assume that you have already installed ran npm install mysql
//The mysql module is imported, and the createConnection method is called to create a new connection object
var mysql=require('mysql');
//The connection object is configured with the necessary details such as the host (usually 'localhost' for a local database), username, password, and the name of the database to connect to
var connection=mysql.createConnection({
  host:'localhost',
  user:'your username',
  password:'your password',
  database:'your database name'
});
//The connect method is called on the connection object. It establishes a connection to the MySQL database using the provided configuration
connection.connect(function(error){
    //In the callback function passed to the connect method, the code checks if there is an error. If an error occurs during the connection, it is logged to the console
  if(!!error){
    console.log(error);
  }else{
    //Otherwise, a success message of 'Connected!:) is logged
    console.log('Connected!:)');
  }
}); 
// connection object is exported so that it can be used in other modules
module.exports = connection;
