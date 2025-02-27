require('dotenv').config()
const express = require("express");
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello World')
})

app.listen(process.env.PORT, () => {
  console.log(`
    ====================
    ====================
    == Server Started ==
    ====================
    ====================
    `);

    console.log(`Port: ${process.env.PORT}`)
});
          