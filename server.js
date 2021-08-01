// import required modules
const express = require('express')

// configure express app
const app = express()
const PORT = 3000

// define routes
app.get('/', (req, res) => {
  res.send('You\'ve reached the home route!')
});

app.get('/add/:x/:y', (req, res) => { 
  const add = parseInt(req.params.x) + parseInt(req.params.y)
  res.send(`The solution is ${add}.`)
})

app.get('/subtract/:x/:y', (req, res) => { 
  const subtract = parseInt(req.params.x) - parseInt(req.params.y)
  res.send(`The solution is ${subtract}.`)
})

app.get('/multiply/:x/:y', (req, res) => { 
  const multiply = parseInt(req.params.x) * parseInt(req.params.y)
  res.send(`The solution is ${multiply}.`)
})

app.get('/divide/:x/:y', (req, res) => { 
  const divide = parseInt(req.params.x) / parseInt(req.params.y)
  res.send(`The solution is ${divide}.`)
})

// listen on a port
app.listen(PORT, () => {
  console.log(`listening to the smooth sounds of port ${PORT} in the morning 🌊`)
})
