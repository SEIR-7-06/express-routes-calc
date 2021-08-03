const express = require("express");
const app = express();
const port = 4000;

app.listen(port, () => {
    console.log("Port: " + port);
})

app.get("/", (req, res) => {
    res.send("Hello, world");
})

app.get("/add/:x/:y", (req, res) => {
    const number1 = req.params.x;
    const number2 = req.params.y;
    const sum = parseInt(x) + parseInt(y);
    response.send(number1 + " + " + number2 + " = " + sum);
})

app.get("/subtract/:x/:y", (req, res) => {
    const number1 = req.params.x;
    const number2 = req.params.y;
    const difference = parseInt(x) - parseInt(y);
    response.send(number1 + " - " + number2 + " = " + difference);
})

app.get("/multiply/:x/:y", (req, res) => {
    const number1 = req.params.x;
    const number2 = req.params.y;
    const product = parseInt(x) * parseInt(y);
    response.send(number1 + " * " + number2 + " = " + product);
})

app.get("/divide/:x/:y", (req, res) => {
    const number1 = req.params.x;
    const number2 = req.params.y;
    const quotient = parseInt(x) / parseInt(y);
    response.send(number1 + " / " + number2 + " = " + quotient);
})