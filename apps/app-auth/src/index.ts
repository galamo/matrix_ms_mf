// @ts-ignore
import { CompletionListener } from "concurrently/dist/src/completion-listener"
import { connectToRMQ } from "../../../libs/rpc/src/connection"
import { startConsumer } from "../../../libs/rpc/src/consumer"
import { loginUser } from "./login"

const rpcConnection = connectToRMQ("")

const handlers = {
    login: async function (args, requestId) {
        try {
            console.log("handler.login.execute", args)
            const result = await loginUser(args.user, args.pass)
            console.log("result is fine.", result)
            return result;
        } catch (ex) {
            const message = ex.message;
            return { isError: true }
        }
    },
    logout: async function (args, requestId) { }
}

const serviceName = "app-auth"
startConsumer({ service: serviceName, handlers, connectionPromise: rpcConnection })