const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(`<div style="height:100%; width:100%; display:flex; justify-content:center; align-items:center;">
	<h1>Hello World!</h1>
  </div>`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

