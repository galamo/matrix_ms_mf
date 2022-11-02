const port: number = 4000;
import express from "express"
import axios from "axios"

const app = express();

app.get("/health-check", (req, res) => {
    res.json({ message: `Server is Running !!! ${new Date().toString()}` })
})

app.get("/countries", async (req, res) => {
    try {
        const { data } = await axios.get("https://restcountries.com/v3.1/all")
        res.json(data)
    }
    catch (ex) {
        res.send("Something went wrong")
    }
})
app.listen(port, () => {
    console.log(`Server is UP`)
})