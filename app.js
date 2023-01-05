const express = require("express")
const app = express()
app.use(express.json())

const usersRouter = require('./router /router')

app.use("/users", usersRouter)


app.listen(3000 ,() => console.log("listening to port 3000"))

