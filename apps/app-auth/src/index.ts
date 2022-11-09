// @ts-ignore
import { connectToRMQ } from "../../../libs/rpc/src/connection"
import { startConsumer } from "../../../libs/rpc/src/consumer"

const rpcConnection = connectToRMQ("")

const handlers = {
    login: async function (args, requestId) {
        try {
            console.log("handler.login.execute")
        } catch (ex) {
            const message = ex.message;
            return { isError: true }
        }
    },
    logout: async function (args, requestId) { }
}

const serviceName = "app-auth"
startConsumer({ service: serviceName, handlers, connectionPromise: rpcConnection })