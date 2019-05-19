const http = require('http')
const port = process.env.PORT || 3000
const handler = require('./index')


const server = http.createServer(handler)
server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})
