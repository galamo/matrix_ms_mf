const express = require('express');
const app = express();
const PORT = 5000;
app.use(express.static('public'))
app.get("/", (req, res) => {
    res.send("static files are ready")
})

app.listen(PORT, () => { console.log(`Server is listenning to Port ${PORT}`) })