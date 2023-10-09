const express = require ("express") 
const { createServer } = require('node:http');
const databaseConnection = require ("./database/index.js")
const app = express()
app.use(express.json())
const server = createServer(app);
const port = 3000 

server.listen(3000, () => {
    console.log(`server running at ${port}`)
  });