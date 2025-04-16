require('dotenv').config()

const express = require('express') //Common JS style
//import express from "express"  // Module JS Style ----> this line can also be used
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/bert', (req, res) => {
    res.send('Attention is all you need!')

})

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
  })
