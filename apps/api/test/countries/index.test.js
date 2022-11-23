const { expect } = require("chai")
require("dotenv").config()
const axios = require("axios")

describe("/countries", () => {
    it("Get countries", async function () {
        this.timeout(5000);
        const { data, status } = await axios.get(`${process.env.BASE_URL}/countries`)
        expect(status).to.be.equal(200)
    })
})