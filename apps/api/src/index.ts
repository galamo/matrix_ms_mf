const port: number = 4000;
import express from "express"

const app = express();

app.get("/health-check", (req, res) => {
    res.json({ message: "Server is Running" })
})

app.listen(port)