import axios from "axios"
async function init() {
    console.log("Running JS in docker - Client");
    setTimeout(callApi, 3000)
    for (let index = 0; index < 50; index++) {
        await callLoginApi();
    }
}

async function callApi() {
    try {
        console.log(process.env.HOST_DOCKER)
        const host = process.env.HOST_DOCKER == "1" ? "host.docker.internal" : "localhost"
        console.log(host)
        const { data } = await axios.get(`http://${host}:4000/countries`)
        console.log(`Number of countreis: ${data?.length}`)
    } catch (ex) {
        console.log("Api failed")
    }
}

async function callLoginApi() {
    try {
        const { data } = await axios.get(`http://localhost:4000/login?user=la@matrix.com&pass=pass2`)
        console.log(data)
    } catch (ex) {
        console.log("Api failed")
    }
}

init();
