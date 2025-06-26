import express from "express"
import dotenv from "dotenv"

dotenv.config()

const app = express()

const port = 4000

app.get("/",(req,res) => {
    res.send("hey coder your server is ready")
})

app.get("/hey",(req,res) => {
    res.send("hey whatsupp")
})

app.get("/login",(req,res) => {
    res.send("<h1>Login to your gmail acc</h1>")
})

app.listen(process.env.PORT, () => {
    console.log(`App is listening on port ${process.env.PORT}`)
})