// @ts-ignore
import { connectToRMQ } from "../../../libs/rpc/src/connection"
import { startConsumer } from "../../../libs/rpc/src/consumer"
import { loginUser } from "./login"

const rpcConnection = connectToRMQ("")

const handlers = {
    login: async function (args) {
        try {
            const result = await loginUser(args.user, args.pass)
            return { result: result[0] }
        } catch (ex) {
            const message = ex.message;
            return { isError: true }
        }
    },
    logout: async function (args, requestId) { }
}

const serviceName = "app-auth"
startConsumer({ service: serviceName, handlers, connectionPromise: rpcConnection })