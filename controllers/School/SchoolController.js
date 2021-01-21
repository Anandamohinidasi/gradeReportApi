import SchoolModel from "../../models/School/SchoolModel.js";

export default class SchoolController {
    #schoolModel;

    constructor(){
        this.#schoolModel = new SchoolModel();
    }
    async searchSchools(searchString) {
        return await this.#schoolModel.searchString(searchString)
    }
}