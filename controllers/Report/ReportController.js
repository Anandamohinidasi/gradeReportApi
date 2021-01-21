import ReportModel from "../../models/Report/ReportModel.js";
import ExcelFileFactory from "../../factories/ExcelFile/ExcelFileFactory.js";

export default class ReportController {
    #reportModel;
    #fileFactory = new ExcelFileFactory;

    constructor(dbConnection) {
        this.#reportModel = new ReportModel(dbConnection);
    }
    async getReport(schoolName, schoolId) {
        return this.#fileFactory
                   .getFile(schoolName, 
                        await this.#reportModel.getReportData(schoolId));
    }
}