const express = require('express')
const server = express()
const expressRoutes = require('./data/expressRoutes')
const port = 4000

server.use(express.json())
server.use('/api/posts', expressRoutes)

server.listen(port, () => {
    console.log(`magic happening on port ${port}`)
})