import MongoClient from "mongodb";
import fs from "fs";

export default class DBConnection {
    #database;
    #client;
    #credentials = fs.readFileSync('./credentials/key.pem');

    get database() {
        return this.#database;
    }

    async init() {
      this.#client = await new MongoClient('mongodb+srv://cluster0.yofyj.mongodb.net/school-report?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority', {
        sslKey: this.#credentials,
        sslCert: this.#credentials
      });
      try {
        await this.#client.connect();
        this.#database = this.#client.db("school-report");
      } catch(e) {
        throw new Error(e)
      }
    }

    async closeConnection() {
      this.#client.close();
    }
}