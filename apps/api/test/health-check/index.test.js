const { expect } = require("chai")
require("dotenv").config()
const axios = require("axios")

describe("health-check", () => {
    it("should return Ok message", async () => {
        const result = await axios.get(`${process.env.BASE_URL}/health-check`)
        expect(result.status).to.be.equal(200)
        expect(result.data.status).to.be.equal("ServerIsUp1")
    })
})