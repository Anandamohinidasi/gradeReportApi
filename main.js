const express = require("express");
const app = express();
const DBConnection = require('./DAO/dbConnector')

const dbConnection = new DBConnection();


app.get('/', (req, res) => {
    res.send('works!')
  })
  
  dbConnection.init().then(() => {
    app.listen(process.env.PORT || 8080, () => {
      console.log(`Example app listening`)
    })
  })