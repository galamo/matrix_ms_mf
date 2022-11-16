const port: number = 4000;
import express from "express"
import axios from "axios"
import { connectToRMQ } from "../../../libs/rpc/src/connection"
import { SendToServiceRpc } from "../../../libs/rpc/src/sendToServiceRpc"

const rpcConnection = connectToRMQ("");
const getProducerQueueName = (pName: string) => `[PRODUCER]${pName.toUpperCase()}::${Date.now()}`;
const producerQueueName = getProducerQueueName("api-gateway")

const app = express();

app.get("/health-check", (req, res) => {
    console.log("api/health-check request", req.ip)
    res.json({ message: `Server is Running !!! ${new Date().toString()}` })
})

app.get("/countries", async (req, res) => {
    try {
        console.log("api/countries request", req.ip)
        const { data } = await axios.get("https://restcountries.com/v3.1/all")
        res.json(data)
    }
    catch (ex) {
        res.send("Something went wrong")
    }
})

app.get("/login", async (req, res) => {
    try {
        // const requestId = (req as any).requestId
        // const getLogger = (msg) => { logger.info(`${requestId}-${msg}`) }
        // const args = "sending auth request to the consumer";
        const args = { user: req.query.user, pass: req.query.pass }
        const requestId = new Date().toString()
        const payload = { handler: "login", args, requestId }
        const result = await SendToServiceRpc({
            connectionPromise: rpcConnection,
            requestId,
            service: "app-auth",
            ...payload,
            replyTo: producerQueueName
        })
        res.json(result)
    }
    catch (ex) {
        // console.log("api error", ex)
        res.send("Something went wrong")
    }
})

app.listen(port)
