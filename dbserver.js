const express = require('express');
const bodyParser = require('body-parser');
// Initialize the app
const app = express();
const port = 3002
const db = require('./queries')
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// https://expressjs.com/en/guide/routing.html
// app.use(bodyParser.urlencoded({extended: true}))
//urlencoded function extracts form data and puts them into the body of the res object
// app.use(bodyParser.urlencoded());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());


// Your client (React) and Server(Backend-API server-Express) are two different domains
// so from React, you are making Call to another domain, which creates CORS error
// Cross Origin Domain Access Error, so we use 'cors' package to eliminate the error
var cors = require('cors');
app.use(cors());
app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)
app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })

// this is a GET API - 'http://localhost:3001/message'
// app.get() means you are creating a GET API 
// Syntax is app.get(API_URL, callBackFunction(){})
// Here, API_URL is the API URL - /users in our case
// call back function is nothing but the function that gets executed when
// User makes a request to this API
// Here, when you make a HTTP call to this API - /users, you ll get 'Hi Sir' message in response
// app.get('/message', function(req, res){
//     res.send('on click you r getting this data......... from Back-end API');
// });

// // App.listen will run the Express server in the specified port number - 3001 in our case.
// app.listen(3001, () => {
//     console.log('listening on 3001')
//  });


 // Go to the folder where this .js file is present and open a cmd
 // And run node filename.js
 //you should get 'listening on 3001' message in cmd console