// What is happening in the following code snippet? 
//The getTodos function is defined
const getTodos = () => {
    //Inside the function, a new XMLHttpRequest object is created and assigned to the request variable. This object allows you to send HTTP requests and handle the responses asynchronously
 const request = new XMLHttpRequest();

// event listener is added to the readystatechange event of the request object. This event is fired whenever the readyState property of the request object changes


request.addEventListener('readystatechange', ()=>{

//checks if the readyState is equal to 4 (indicating that the request has completed) and if the status is 200 (indicating a successful response).

//If both conditions are met, it logs the response text (request.responseText) to the console, which contains the data received from the requested URL
 if(request.readyState === 4 && request.status ===200){
   console.log(request.responseText)
    }
    //If the readyState is 4 but the status is not 200, it logs the message 'could not fetch the data' to the console
   else if (request.readyState === 4){
     console.log('could not fetch the data');
   }
});

//After setting up the event listener, the open method is called on the request object. It configures the request with the HTTP method 'GET' and the URL 'https://jsonplaceholder.typicode.com/todos/'
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
// send method is called on the request object, which sends the HTTP request
request.send();
}



//getTodos function is called twice at the end of the code, invoking the HTTP request two times
getTodos();
getTodos();
