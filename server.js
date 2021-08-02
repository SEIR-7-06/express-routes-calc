const express = require('express'); 
const rowdy = require('rowdy-logger')

const app = express();
const port = 4000;
const rowdyResults = rowdy.begin(app)

// const numX = req.params.x
// const numY = req.params.y

app.get('/', (req,res) => {
    res.send('Hello, World')
})

app.get('/add/:x/:y', (req, res) => {
    const numX = parseInt(req.params.x)
    const numY = parseInt(req.params.y)
    const addNum = JSON.stringify(numX + numY)
    console.log(addNum);
    res.send(`${addNum}`)
})
app.get('/subtract/:x/:y', (req, res) => {
    const numX = parseInt(req.params.x)
    const numY = parseInt(req.params.y)
    const subtractNum = JSON.stringify(numX - numY)
    console.log(subtractNum);
    res.send(`${subtractNum}`)
})
app.get('/multiply/:x/:y', (req, res) => {
    const numX = parseInt(req.params.x)
    const numY = parseInt(req.params.y)
    const multiplyNum = numX * numY
    console.log(multiplyNum);
    res.send(`${multiplyNum}`)
})
app.get('/divide/:x/:y', (req, res) => {
    const numX = parseInt(req.params.x)
    const numY = parseInt(req.params.y)
    const divideNum = numX / numY
    console.log(divideNum);
    res.send(`${divideNum}`)
})


app.listen(port, () => {
    console.log(`Your server is running on port: ${port}🧮`);
    rowdyResults.print()
})