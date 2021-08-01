/////// Configuration ///////
const express = require("express");

const app = express();

const port = 4000;


//////// Routes ////////

app.get("/", (req, res) => {
    res.send("Lets get this started!");
})

app.get('/add/:x/:y', (req, res) => {
    const xNum = parseInt(req.params.x)
    const yNum = parseInt(req.params.y)
    let sum = xNum + yNum
    res.send(`Your added total is ${sum}! :D`)
})

app.get('/subtract/:x/:y', (req, res) => {
    const xNum = parseInt(req.params.x)
    const yNum = parseInt(req.params.y)
    let sum = xNum - yNum
    res.send(`Your subtracted total is ${sum}! :D`)
})

app.get('/multiply/:x/:y', (req, res) => {
    const xNum = parseInt(req.params.x)
    const yNum = parseInt(req.params.y)
    let sum = xNum * yNum
    res.send(`Your multiplied total is ${sum}! :D`)
})


app.get('/divided/:x/:y', (req, res) => {
    const xNum = parseInt(req.params.x)
    const yNum = parseInt(req.params.y)
    let sum = xNum / yNum
    res.send(`Your divided total is ${sum}! :D`)
})






/////// Starting the Server/////////
app.listen(port, () => {
    console.log("Hello World")
})


