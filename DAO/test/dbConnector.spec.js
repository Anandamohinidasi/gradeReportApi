const { assert, expect } = require("chai");
const { MongoClient, Db } = require('mongodb');
const DBConnector = require("../dbConnector");
const dbConnector = new DBConnector();


describe("Db initialisation", () => {
    describe("Check before init", () => {
        it("getdb should return undefined", () => {
            assert(dbConnector.database === undefined)
        })
    })
    describe("After init", () => {
        it("getdb should return a db connection", async () => {
            await dbConnector.init();
            assert(dbConnector.database instanceof Db);
            dbConnector.closeConnection();
        })
    })
})
describe("DB closing", () => {
    describe("Call for closeConnection method", () => {
        it("getdb should return undefined after connection closed", async () => {
            await dbConnector.init();
            await dbConnector.closeConnection();
            expect(dbConnector.database.listCollections).to.throw();
        })
    })
})