import axios from "axios"
function init() {
    console.log("Running JS in docker - Client");
    setTimeout(callApi, 3000)
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

init();
