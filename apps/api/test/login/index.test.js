const { expect } = require("chai")
require("dotenv").config()
const axios = require("axios")
const { faker } = require('@faker-js/faker')
const { getConnection } = require("../../dist/apps/api/src/db/index")

function getRandomUser() {
    return {
        company: faker.company.name(),
        last_name: faker.name.lastName(),
        first_name: faker.name.firstName(),
        email_address: faker.internet.email(),
        password: faker.internet.password(),
    }
}
const currentUser = getRandomUser();
before(async () => {
    const { company, last_name, first_name, email_address, password } = currentUser;
    await getConnection().execute(getSqlInsertQuery(), [company, last_name, first_name, email_address, password])
})

describe("/login", () => {
    it("Should return Ok", async () => {
        try {
            const result = await
                axios.get(`${process.env.BASE_URL}/login?user=${currentUser.email_address}&pass=${currentUser.password}`)
            const { status } = result;
            expect(status).to.be.equal(200)
        } catch (error) {
            throw new Error("Login Failed")
        }
    })
    it("Should return 401", async () => {
        try {
            const result = await
                axios.get(`${process.env.BASE_URL}/login?user=INCORRECTUSER&pass=INCORRECTUSER`)
            const { status } = result;
            throw new Error("Authorization broken")
        } catch (error) {
            expect(error.response.status).to.be.equal(401)
        }
    })
    it("Should return 400", async () => {
        try {
            const result = await
                axios.get(`${process.env.BASE_URL}/login?user=INCORRECTUSERINCORRECTUSERINCORRECTUSERINCORRECTUSERINCORRECTUSERINCORRECTUSERINCORRECTUSERINCORRECTUSER&pass=INCORRECTUSER`)
            const { status } = result;
            throw new Error("Authorization broken")
        } catch (error) {
            expect(error.response.status).to.be.equal(400)
        }
    })
})

after(async () => {
    const { email_address } = currentUser;
    await getConnection().execute(getSqlDeleteQuery(), [email_address])
})

function getSqlDeleteQuery() {
    return `DELETE FROM users where email_address = ?;`
}
function getSqlInsertQuery() {
    return `INSERT INTO users (company, last_name, first_name, email_address, password) VALUES (?,?,?,?,?);`
}