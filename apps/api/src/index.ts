const port: number = 4000;
import express from "express"

const app = express();

app.get("/health-check", (req, res) => {
    res.json({ message: `Server is Running ${new Date().toString()}` })
})

app.get("/countries", (req, res) => {
    for (let index = 0; index < 9999999999; index++) {
    }
    res.json({ countries: ["Israel", "Italy", "England"] })
})

app.listen(port)