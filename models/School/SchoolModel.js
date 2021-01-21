export default class SchoolModel {
    #dbConnection;

    constructor(dbConnection) {
        this.#dbConnection = dbConnection;
    }

    async searchSchools(searchString) {
        const schoolCollection = await this.#dbConnection.database.collection("school");
        const res = await schoolCollection.aggregate([
                {
                    $search: {
                      "autocomplete": {
                        "query": searchString,
                        "path": "name",
                        "tokenOrder": "any",
                        "fuzzy": {
                            "maxEdits": 2
                        },
                      }
                    }
                },
                {
                    $limit: 8
                }
        ]).toArray();
        return res;
    }
}