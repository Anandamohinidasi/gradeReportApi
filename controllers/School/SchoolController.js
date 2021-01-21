import SchoolModel from "../../models/School/SchoolModel.js";

export default class SchoolController {
    #schoolModel;

    constructor(dbConnection) {
        this.#schoolModel = new SchoolModel(dbConnection);
    }

    async searchSchools(searchString) {
        return await this.#schoolModel.searchSchools(searchString)
    }
}