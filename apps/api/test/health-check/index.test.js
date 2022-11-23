const { expect } = require("chai")
require("dotenv").config()
const axios = require("axios")

describe("/health-check", () => {
    it("should return Ok message", async () => {
        const { data, status } = await axios.get(`${process.env.BASE_URL}/health-check`)
        expect(status).to.be.equal(200)
        expect(data.status).to.be.equal("ServerIsUp1")
    })
})