// @ts-ignore
import { connectToRMQ } from "../../../libs/rpc/src/connection"
import { startConsumer } from "../../../libs/rpc/src/consumer"
import axios from "axios"
const rpcConnection = connectToRMQ("")

const handlers = {
    getCountries: async function () {
        try {
            const { data } = await axios.get("https://restcountries.com/v3.1/all")
            return { result: data }
        } catch (ex) {
            const message = ex.message;
            return { isError: true }
        }
    },
    getStatistics: async function (args, requestId) { }
}

const serviceName = "app-countries"
startConsumer({ service: serviceName, handlers, connectionPromise: rpcConnection })