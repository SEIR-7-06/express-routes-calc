const express = require('express'); 
const rowdy = require('rowdy-logger')

const app = express(); 
const port = 4000;
const rowdyResults = rowdy.begin(app)

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false})) 


app.get('/', (request, response) => {

    response.send('Welcome to Math');
  })
app.get('/add/:x/:y', (request, response) => {
   let numX = parseInt(request.params.x); 
	let numY = parseInt(request.params.y); 
	let total = (numX + numY).toString();
	response.send(`Your total is ${total}.`);
})
app.get('/subtract/:x/:y', (request, response) => {
    let numX = parseInt(request.params.x); 
	let numY = parseInt(request.params.y); 
	let total = (numX - numY).toString();
	response.send(`Your total is ${total}.`);
});

app.get('/multiply/:x/:y', (request, response) => {
    let numX = parseInt(request.params.x); 
	let numY = parseInt(request.params.y); 
	let total = (numX * numY).toString();
	response.send(`Your total is ${total}.`);
})
app.get('/divide/:x/:y', (request, response) => {
    let numX = parseInt(request.params.x); 
	let numY = parseInt(request.params.y); 
	let total = (numX / numY).toString();
	response.send(`Your total is ${total}.`);
})


app.listen(port, () => {
  console.log(`Your server is running on port: ${port} 🧛🏻‍♂️`);
  rowdyResults.print()
});
