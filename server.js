const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello Sardar Ali here')
})

const port= process.env.port || 3000;

app.listen(port, () => {
  console.log(`the application is running successfully`)
})
