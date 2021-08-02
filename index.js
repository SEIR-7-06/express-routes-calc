// IMPORT REQUIRED MODULES
const express = require('express');
const rowdy = require('rowdy-logger');


// CONFIGURE EXPRESS APP
const app = express();
const PORT = 4001;


// DEFINE ROUTES
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/add/:x/:y', (req, res) => {
    const add = parseInt(req.params.x) + parseInt(req.params.y);
    res.send(`${req.params.x} - ${req.params.y} = ${add}`);
})

app.get('/subtract/:x/:y', (req, res) => {
    const sub = parseInt(req.params.x) - parseInt(req.params.y)
    res.send(`${req.params.x} - ${req.params.y} = ${sub}`)
  })
  
  app.get('/multiply/:x/:y', (req, res) => {
    const mult = parseInt(req.params.x) * parseInt(req.params.y)
    res.send(`${req.params.x} * ${req.params.y} = ${mult}`)
  })
  
  app.get('/divide/:x/:y', (req, res) => {
    const div = parseInt(req.params.x) / parseInt(req.params.y)
    res.send(`${req.params.x} / ${req.params.y} = ${div}`)
  })

// LISTEN ON A PORT
app.listen(PORT, () => {
    console.log(`listening to the ${PORT} port`)
})
