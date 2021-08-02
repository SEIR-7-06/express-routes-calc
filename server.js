//pulling the express package into this file
const express = require('express')
//invoke the express function app
const app = express()
const port = 3000

//Temporary simulated database
//start up our server
app.listen(port, () => {
    console.log(`your server is running on ${port}`)
})

//Listen for req on '/' route, and when they are heard,
//call this callback function
app.get('/', (request, response) => {
response.send('hello world')
})

//////////////////////ADD//////////////////////
//the colon in the url route specific to express and url routes.
// it is like the $ sign when using a variable inside a string
app.get('/add/:x/:y',(request, response) => {
    const x = request.params.x
    const y = request.params.y
//parseInt is a METHOD not a func because it is built into js 
    const sum = parseInt(x) + parseInt(y)
    response.send(`${x} + ${y} = ${sum}`)
})

/////////////////SUBTRACT//////////////////////
app.get('/subtract/:x/:y',(request, response) => {
    const x = request.params.x
    const y = request.params.y
    const subtract = parseInt(x) - parseInt(y)
    response.send(`${x} - ${y} = ${subtract}`)
})

/////////////////MULTIPLY//////////////////////
app.get('/multiply/:x/:y',(request, response) => {
    const x = request.params.x
    const y = request.params.y
    const multiply = parseInt(x) * parseInt(y)
    response.send(`${x} * ${y} = ${multiply}`)
})

/////////////////DIVIDE//////////////////////
app.get('/divide/:x/:y',(request, response) => {
    const x = request.params.x
    const y = request.params.y
    const divide = parseInt(x) / parseInt(y)
    response.send(`${x} / ${y} = ${divide}`)
})