import axios from "axios"
function init() {
    console.log("Running JS in docker - Client");
    setTimeout(callApi, 3000)
}

async function callApi() {
    try {
        const { data } = await axios.get("http://localhost:4000/countries")

        console.log(`Number of countreis: ${data?.length}`)
    } catch (ex) {
        console.log("Api failed")
    }
}

init();
