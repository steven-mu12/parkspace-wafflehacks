const { Socket } = require('dgram')
const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const { v4: uuidV4 } = require('uuid')


app.set('view engine', 'ejs')
app.use(express.static('public'))

/* homescreen */
app.get('/', (req, res) => {
    res.redirect(`/${uuidV4()}`)
})

app.get('/:room', (req, res) => {
    res.render('room',{roomId: req.params.room})
})

io.on('connetion', socket => {
    Socket.on('join-room',(roomId, userId) => {
        console.log(roomId, userId)
    })
})


server.listen(3000)