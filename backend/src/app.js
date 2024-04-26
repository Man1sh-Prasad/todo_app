import express from "express";
import auth from "./routes/auth.js"
import list from "./routes/list.js"

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        msg: "hello"
    })
})

app.use("/api/v1", auth)
app.use("/api/v2/", list)

export { app }