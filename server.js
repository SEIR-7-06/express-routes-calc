const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
app.get('/add/*', (req, res) => {
    
    let nums= req.params[0].replace(/\//g,"").split("")
    let sum =0
    for (let i =0; i<nums.length;i++){
        sum+=parseInt(nums[i])
    }
    res.send(`The sum of your numbers is ${sum}`)


  })
app.get('/subtract/*', (req, res) => {
    let nums= req.params[0].replace(/\//g,"").split("")
    let diff =nums[0]
    for (let i =1; i<nums.length;i++){
        diff-=parseInt(nums[i])
        
    }
    res.send(`The difference of your numbers is ${diff}`)
  })
app.get('/multiply/*', (req, res) => {
    let nums= req.params[0].replace(/\//g,"").split("")
    let prod =nums[0]
    for (let i =1; i<nums.length;i++){
        prod*=parseInt(nums[i])
    }
    res.send(`The product of your numbers is ${prod}`)
  })
app.get('/divide/*', (req, res) => {
    let nums= req.params[0].replace(/\//g,"").split("")
    let quo = nums[0]
    for (let i =1; i<nums.length;i++){
        quo =quo /parseInt(nums[i])
    }
    res.send(`The quotient of your numbers is ${quo.toFixed(2)}`)
  })
  

  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })