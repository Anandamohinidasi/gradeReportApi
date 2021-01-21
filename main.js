import express from "express";
import DBConnection from "./DAO/dbConnector.js";
import SchoolController from "./controllers/School/SchoolController.js"

const app = express();
const dbConnection = new DBConnection();


app.get('/schools/:searchString', (req, res) => {
    res.send('works!')
  })
  
dbConnection.init().then(() => {
  app.listen(process.env.PORT || 8080, () => {
    console.log(`Example app listening`)
  })
})