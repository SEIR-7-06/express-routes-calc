
// required modules
const { request } = require('express')
const express = require('express')
// configure the express app
const app = express()
const PORT = 4000

// define routes
app.get('/', (req,res) => {
    res.send('connected')
})

app.get('/add/:x/:y', (req,res)=>{
    const add1 = Number(req.params.x)
    const add2 = Number(req.params.y)
    const added = (add1) + (add2)
    console.log(added)
    res.send(`the sum is ${added}`)
})

app.get('/subtract/:x/:y', (req,res)=>{
    const add1 = Number(req.params.x)
    const add2 = Number(req.params.y)
    const added = (add1) - (add2)
    console.log(added)
    res.send(`the difference is ${added}`)
})

app.get('/multiply/:x/:y', (req,res)=>{
    const add1 = Number(req.params.x)
    const add2 = Number(req.params.y)
    const added = (add1) * (add2)
    console.log(added)
    res.send(`the product is ${added}`)
})

app.get('/divide/:x/:y', (req,res)=>{
    const add1 = Number(req.params.x)
    const add2 = Number(req.params.y)
    const added = (add1) / (add2)
    console.log(added)
    res.send(`the quotient is ${added}`)
})

// listen for a port
app.listen(PORT, () => {
    console.log(`listening on ${PORT}` )
})
