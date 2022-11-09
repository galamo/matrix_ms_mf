const port: number = 4000;
import express from "express"
import axios from "axios"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import { loginUser } from "./login";
dotenv.config()

const app = express();
app.use(bodyParser.json())
app.get("/health-check", (req, res) => {
    console.log("api/health-check request", req.ip)
    res.json({ message: `App-Auth is Running !!! ${new Date().toString()}` })
})

app.post("/login", async (req, res, next) => {
    const { data } = req.body
    try {
        const result = await loginUser(data.user, data.pass)
        res.json(result)
    } catch (err) {
        // console.log("app-auth error", err)
        res.send("something went wrong")
    }
})


app.listen(process.env.PORT)