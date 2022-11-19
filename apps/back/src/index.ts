const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server)

io.on('connection', (socket) => {
  switch (socket.handshake.query.role) {
    case ('host'):
      
    case ('guest'):
      
  }
  console.log('connected')
})

server.listen(3000, () => {
  console.log('listening on *:3000')
})
