const express = require('express');
const app = express();
const port = 4000;
// const rowdyResults = rowdy.begin(app)

app.listen(port, () => {
    console.log(`Your app is running on port ${port}`)
})

app.get('/add/:x/:y', (req, res) => {
    let sum = (parseInt(req.params.x) + parseInt(req.params.y));
    res.send(`${req.params.x} + ${req.params.y} = ${sum}`)
})

app.get('/subtract/:x/:y', (req, res) => {
    let rem = (parseInt(req.params.x) - parseInt(req.params.y));
    res.send(`${req.params.x} - ${req.params.y} = ${rem}`)
})

app.get('/multiply/:x/:y', (req, res) => {
let total = (parseInt(req.params.x) * parseInt(req.params.y));
res.send(`${req.params.x} * ${req.params.y} = ${total}`)
})

app.get('/divide/:x/:y', (req, res) => {
    let frac = ((parseInt(req.params.x)/parseInt(req.params.y)));
    res.send(`${req.params.x} / ${req.params.y} = ${frac}`)
})
