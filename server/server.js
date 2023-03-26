const express = require('express')
const app = express()

app.get("/api", (req, res) => {
    res.json({"users": ["Gomycode", "Devops Bootcamp", "Snr Dev Babatunde", "Chukwuebuka", "Checkpoint"] })
})

app.listen(5000, () => {console.log("server started on port 5000") })