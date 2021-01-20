const { MongoClient } = require('mongodb');
const fs = require('fs');

module.exports = class DBConnection {
    #database;
    #client;
    #credentials = fs.readFileSync('./credentials/key.pem');


    get database() {
        return this.#database;
    }

    constructor() {
      this.#client = new MongoClient('mongodb+srv://cluster0.yofyj.mongodb.net/school-report?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority', {
        sslKey: this.#credentials,
        sslCert: this.#credentials
      });
    }
    
    async init() {
      try {
        await this.#client.connect();
        this.#database = this.#client.db("school-report");
      } catch(e) {
        throw new Error(e)
      }
    }
}