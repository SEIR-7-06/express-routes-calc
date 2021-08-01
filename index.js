const express = require('express');
const app = express();
const port = 4000;

app.get('/add/:x/:y', (req, res) => {
    const xNum = parseInt(req.params.x)
    const yNum = parseInt(req.params.y)
    let sum = JSON.stringify(xNum + yNum)
    res.send(`Your added total is ${sum}.`)
})

app.get('/subtract/:x/:y', (req, res) => {
    const xNum = parseInt(req.params.x)
    const yNum = parseInt(req.params.y)
    let sum = JSON.stringify(xNum - yNum)
    res.send(`Your subtracted total is ${sum}.`)
})

app.get('/multiply/:x/:y', (req, res) => {
    const xNum = parseInt(req.params.x)
    const yNum = parseInt(req.params.y)
    let sum = JSON.stringify(xNum * yNum)
    res.send(`Your multiplied total is ${sum}.`)
})

app.get('/divide/:x/:y', (req, res) => {
    const xNum = parseInt(req.params.x)
    const yNum = parseInt(req.params.y)
    let sum = JSON.stringify(xNum / yNum)
    res.send(`Your divided total is ${sum}.`)
})

//bonus --> got halfway there...
app.get("/*", function(req, res) {
    let question = '';
    for (let key in req.query) {
      question = req.query[key]
    }
    let result = question.reduce((total, num) => {
        return total + parseInt(num)
      }, 0);
      res.send("The answer is  " + result + ".");
    if (req.query.add) {
        return result
    } else if (req.query.subtract) {
       console.log("subtract")
    } else if (req.query.multiply) {
        console.log("multiply")
    } else if (req.query.divide) {
        console.log("divide")
    }
  });

app.listen(4000, () => {
    console.log(`Hello, I am listening at port ${port}`)
})