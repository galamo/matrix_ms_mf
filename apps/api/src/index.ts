const port: number = 4000;
import express from "express"
import axios from "axios"
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

        const { user, pass } = req.query;
        if (!user || !pass) return res.send("missing user")
        // `http://localhost:4000?user=${user}&pass=${pass}` from api 
        console.log(user, pass)
        const { data } = await axios.post(`http://localhost:4001/login`, {
            data: { user, pass }
        })
        res.json(data)
    }
    catch (ex) {
        // console.log("api error", ex)
        res.send("Something went wrong")
    }
})

app.listen(port)