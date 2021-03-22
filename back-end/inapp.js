const express = require('express')
const request = require('request');
const cors = require('cors');
const json_data = require('./sample.json')
app = express();
// To make or access to another origin
app.use(cors());
// request.body comes undefinend to overcome that we use tha below code
app.use(express.json())
app.use(express.urlencoded({extended:false}))
const PORT = 4000;

app.post('/Validateuser',(req,res)=>{
    let flag = false;
    json_data.forEach((arr)=>{
            if(arr.adh == req.body.Aadhar && arr.voter==req.body.Voter){
                  console.log("valid")
                  flag = true
                  if(flag==true) res.send("success")
            }
    })
    console.log("I am Invoked")
    // res.send("success")
    console.log(req.body)
   
})
app.get('/home', function(req, res) {
    request('http://127.0.0.1:5000/', function (error, response, body) {
        console.error('error:', error); // Print the error
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the data received
        res.send(body); //Display the response on the website
      });      
});

app.get('/face_verification', function(req, res) {
    request('http://127.0.0.1:5000/open_me', function (error, response, body) {
        console.error('error:', error); // Print the error
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the data received
        res.send(body); //Display the response on the website
      });      
});

app.listen(PORT, function (){ 
    console.log(`Listening on Port ${PORT}`);
});  
