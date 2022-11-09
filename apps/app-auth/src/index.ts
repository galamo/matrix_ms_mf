//@ts-ignore
import { connectToRMQ } from "../../../libs/rpc/src/connection"  // install from NPM
//@ts-ignore
import { startConsumer } from "../../../libs/rpc/src/consumer"  // install from NPM
const rpcConnection = connectToRMQ("");

const handlers = {
    loginUser: async function (args, requestId) {
        try {
            console.log("Sending an Email", args, requestId)
        } catch (ex) {
            const message = ex.message
            return { isError: true }
        }
    }
}


const serviceName = "app-auth"
startConsumer({ service: serviceName, handlers, connectionPromise: rpcConnection })