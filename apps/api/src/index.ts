const port: number = 4000;
import express from "express"
import axios from "axios"
import { connectToRMQ } from "../../../libs/rpc/src/connection"
import { SendToServiceRpc } from "../../../libs/rpc/src/sendToServiceRpc"
import uuidv4 from "uuid4"
import cors from "cors";

const rpcConnection = connectToRMQ("")
const getProducerName = (pName: string) => `[PRODUCER: ${pName.toUpperCase()}}] `
const producerQueueName = getProducerName("api_gateway")

const app = express();
app.use(cors())
app.use((req, res, next) => {
    const id = uuidv4();
    req["requestId"] = id
    res.setHeader("x-request-id", id)
    next();
})

app.get("/health-check", (req, res) => {
    console.log("api/health-check request", req.ip)
    res.json({ status: "ServerIsUp1", message: `Server is Running !!! ${new Date().toString()}` })
})

app.get("/countries", async (req, res) => {
    try {
        const requestId = (req as any).requestId;
        const payload = { requestId, handler: "getCountries", args: {} }
        const result = await SendToServiceRpc({
            connectionPromise: rpcConnection,
            requestId,
            service: "app-countries",
            replyTo: producerQueueName,
            ...payload
        })
        res.json(result)
    }
    catch (ex) {
        res.send("Something went wrong")
    }
})

app.get("/login", async (req, res) => {
    try {
        // validate
        // authenticate - not relevant to login
        const args = { user: req.query.user, pass: req.query.pass }
        if (args.user.length > 30) return res.status(400).json()
        const requestId = (req as any).requestId;
        console.log("requestId", requestId)
        const payload = { requestId, handler: "login", args }
        const result: any = await SendToServiceRpc({
            connectionPromise: rpcConnection,
            requestId,
            service: "app-auth",
            replyTo: producerQueueName,
            ...payload
        })
        const isUserExist = Object.keys(result.result).length;

        if (isUserExist) {
            return res.json(result)
        } else {
            return res.status(401).json(result)
        }
    }
    catch (ex) {
        // console.log("api error", ex)
        res.send("Something went wrong")
    }
})

app.listen(port, function () {
    console.log("Listen to Port")
})