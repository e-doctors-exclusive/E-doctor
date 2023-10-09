const express = require ("express") 
const { createServer } = require('node:http');
const databaseConnection = require ("./database/index.js")


//// routers import 
const userRouter = require("./router/patient.router.js")
const doctorRouter = require ("./router/doctor.router.js")
const reviewRouter  = require ("./router/review.router.js")

const app = express()
app.use(express.json())
const server = createServer(app);
const port = 3000 
//// routers 
app.use("/api",userRouter)
app.use("/api",doctorRouter)
app.use("/api",reviewRouter)


server.listen(3000, () => {
    console.log(`server running at ${port}`)
  });