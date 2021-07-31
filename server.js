const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send("You've reached the home route!");
  });

  app.get('/add/*', (request, response) => {
    let myParams = request.params[0].split("/");
    let result = myParams.reduce((total, num) => {
        return parseFloat(total + parseFloat(num));
    });
    response.send("The answer is " + result)
   
   
})

app.get('/multiply/*', (request, response) => {
    let myParams = request.params[0].split("/");
    let result = myParams.reduce((total, num) => {
        return parseFloat(total * parseFloat(num));
    });
    response.send("The answer is " + result)
   
   
})

app.get('/subtract/*', (request, response) => {
    let myParams = request.params[0].split("/");
    let result = myParams.reduce((total, num) => {
        return parseFloat(total - parseFloat(num));
    });
    response.send("The answer is " + result)
   
   
})



app.get('/divide/*', (request, response) => {
    let myParams = request.params[0].split("/");
    let result = myParams.reduce((total, num) => {
        return parseFloat(total / parseFloat(num)).toFixed(2);
    });
    response.send("The answer is " + result)
   
   
})


app.listen(port, () => {

    console.log(`Server is running on port ${port}.`)

})

//CHALLENGES MET and ADDED as FEATURES or otherwise incorporated into this mini EXPRESS server

//Reminded myself that x and y had to be pulled into the functions of the server had to be defined as parameters and assigned to variables called in routine that evaluates math for this collection of funcs

//Any math expressions, including number-rounding, had to be done inside the braces, not attache to the outside

//variable "messageAdd" was OK dor redeclaration because its scope was local to each mini-func that called/created it.

//used toFixed to keep numbers reasonably rounded

//ATTRIBUTION: learned about passing more than two parameters from this site, suggested by staff
// https://gawdiseattle.gitbook.io/wdi/05-node-express/00readme-1/02routes#2nd-express-app-fun-with-routes