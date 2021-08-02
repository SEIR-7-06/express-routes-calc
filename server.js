const express = require('express');
const app = express();
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listening for client requests on port ${PORT}`);
})
// Easy way
function easyWay() {
    //Addition
    app.get('/add', (req, res) => {
        const add = parseInt(req.query.x) + parseInt(req.query.y);
        res.send(`${req.query.x} + ${req.query.y} is equal to ${add}`);
    });
    //Subtraction
    app.get('/subtract', (req, res) => {
        const sub = parseInt(req.query.x) - parseInt(req.query.y);
        res.send(`${req.query.x} - ${req.query.y} is equal to ${sub}`);
    });
    //Multiplication
    app.get('/multiply', (req, res) => {
        const mult = parseInt(req.query.x) * parseInt(req.query.y);
        res.send(`${req.query.x} * ${req.query.y} is equal to ${mult}`);
    });
    //Division
    app.get('/divide', (req, res) => {
        if(req.query.y === '0'){
            res.send(`${req.query.x} / ${req.query.y} is not possible`)
        } else{
            const div = parseInt(req.query.x) / parseInt(req.query.y);
            res.send(`${req.query.x} / ${req.query.y} is equal to ${div}`);
        }
    });
}
// Param way
function paramWay() {
    //Addition
    app.get('/add/:x/:y', (req, res) => {
        const add = parseInt(req.params.x) + parseInt(req.params.y);
        res.send(`${req.params.x} + ${req.params.y} is equal to ${add}`)
    })
    //Subtraction
    app.get('/subtract/:x/:y', (req, res) => {
        const sub = parseInt(req.params.x) - parseInt(req.params.y);
        res.send(`${req.params.x} - ${req.params.y} is equal to ${sub}`)
    })
    //Multiplication
    app.get('/multiply/:x/:y', (req, res) => {
        const mult = parseInt(req.params.x) * parseInt(req.params.y);
        res.send(`${req.params.x} * ${req.params.y} is equal to ${mult}`)
    })
    //Division
    app.get('/divide/:x/:y', (req, res) => {
        if(req.params.y === '0'){
            res.send(`${req.params.x} / ${req.params.y} is not possible`)
        }else{
            const div = parseInt(req.params.x) / parseInt(req.params.y);
            res.send(`${req.params.x} / ${req.params.y} is equal to ${div}`)
        }
    })
}

//Calling functions
paramWay();
// easyWay();
