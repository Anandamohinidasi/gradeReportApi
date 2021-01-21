import express from "express";
import DBConnection from "./DAO/dbConnector.js";
import SchoolController from "./controllers/School/SchoolController.js"
import ReportController from "./controllers/Report/ReportController.js"

const app = express();
const dbConnection = new DBConnection();
const schoolController = new SchoolController(dbConnection);
const reportController = new ReportController(dbConnection);


app.get('/schools/:searchString', async (req, res) => {
    res.send(await schoolController.searchSchools(req.params["searchString"]))
})

app.get('/reports/:schoolName/:schoolId', async (req, res) => {
  const {schoolName, schoolId} = req.params;
  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  res.setHeader("Content-Disposition", `attachment; filename=grade_report_for_${schoolName.replace(' ', '_')}.xlsx`);
  
  await (await reportController.getReport(schoolName, schoolId)).write(res)
  res.end();
})
  
dbConnection.init().then(() => {
  app.listen(process.env.PORT || 8080, () => {
    console.info(`Reports api listening`)
  })
})