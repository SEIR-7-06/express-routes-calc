// REQUIRED MODULES /////////////////
const express = require('express')

// VARIABLES ////////////////////////
const app = express()
const port = 3000

// ROUTES ///////////////////////////
app.get('/', (request, response) => {
    response.send('Hello, World!')
  });

// ADD //
  app.get('/add/:numX/:numY', (request, response) => {
    const numX = parseFloat(request.params.numX)
    const numY = parseFloat(request.params.numY)
    const sum = (numX + numY)
    response.send(`${numX} + ${numY} = ${sum}`)
  })

// SUBTRACT //
  app.get('/subtract/:numX/:numY', (request, response) => {
    const numX = parseFloat(request.params.numX)
    const numY = parseFloat(request.params.numY)
    const sub = (numX - numY)
    response.send(`${numX} - ${numY} = ${sub}`)
  })

// MULTIPLY //
  app.get('/multiply/:numX/:numY', (request, response) => {
    const numX = parseFloat(request.params.numX)
    const numY = parseFloat(request.params.numY)
    const mult = (numX * numY)
    response.send(`${numX} * ${numY} = ${mult}`)
  })

// DIVIDE //
  app.get('/divide/:numX/:numY', (request, response) => {
    const numX = parseFloat(request.params.numX)
    const numY = parseFloat(request.params.numY)
    const div = (numX / numY)
    response.send(`${numX} / ${numY} = ${div}`)
  })
  
// START SERVER //////////////////////
  app.listen(port, () => {
    console.log(`listen on port ${port}`)
  })