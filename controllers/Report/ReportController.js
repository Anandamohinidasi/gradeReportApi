import ReportModel from "../../models/Report/ReportModel.js";

export default class ReportController {
    #reportModel;

    constructor(dbConnection) {
        this.#reportModel = new ReportModel(dbConnection);
    }
    async getReport(schoolName, schoolId) {
        //getData
        return await this.#reportModel.getReportData(schoolId);
        //preparefile
        //send file -> return reportFile;
    }
}