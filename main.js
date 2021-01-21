import express from "express";
import DBConnection from "./DAO/dbConnector.js";
import SchoolController from "./controllers/School/SchoolController.js"

const app = express();
const dbConnection = new DBConnection();
const schoolController = new SchoolController(dbConnection);


app.get('/schools/:searchString', async (req, res) => {
    res.send(await schoolController.searchSchools(req.params["searchString"]))
  })
  
dbConnection.init().then(() => {
  app.listen(process.env.PORT || 8080, () => {
    console.log(`Example app listening`)
  })
})