import Mongo from "mongodb";

export default class ReportModel {
    #dbConnection;

    constructor(dbConnection) {
        this.#dbConnection = dbConnection;
    }

    async getReportData(schoolId) {
       return await this.#dbConnection.database.collection("student")
        .find({"school_id": Mongo.ObjectID(schoolId)}).toArray();
    }
}