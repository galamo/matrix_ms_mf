import axios from "axios";
console.log("Consumer is up and running")
console.log("Consumer is up and running")
console.log("Consumer is up and running")
console.log("Consumer is up and running")
console.log("Consumer is up and running")

async function consumeDataApi() {
    const result = await axios.get("http://localhost:4000")
    console.log(result.data)
}

consumeDataApi();