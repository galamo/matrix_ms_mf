const port: number = 4000;
import express from "express"
import axios from "axios"
import dotenv from "dotenv"
dotenv.config()

const app = express();

app.get("/health-check", (req, res) => {
    console.log("api/health-check request", req.ip)
    res.json({ message: `App-Auth is Running !!! ${new Date().toString()}` })
})


app.listen(process.env.PORT)