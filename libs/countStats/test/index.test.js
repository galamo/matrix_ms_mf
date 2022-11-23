const { expect } = require("chai")
const countStatistics = require("../index");


describe("Testing Lib", () => {
    it("Function type", () => {
        expect(typeof countStatistics).to.be.equal("function")
    })

    it("if Param is not array", () => {
        const result = countStatistics();
        expect(result).to.be.equal(undefined)
    })

    it("Succecss result for [1,2,3] to be 6", () => {
        const result = countStatistics([1, 2, 3]);
        expect(result).to.be.equal(6)
    })
    it("Succecss result for [aaaa,2,3] to be 6", () => {
        const result = countStatistics(["aaaa", 2, 3]);
        expect(isNaN(result)).to.be.true
    })
})