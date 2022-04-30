const express = require('express')
const cors = require('cors')
const fs = require('fs')
const http = require('http')
const https = require('https')
const httpPort = 10080
const httpsPort = 10443
// const certificate = fs.readFileSync('fullchain.pem', 'utf8')
// const key = fs.readFileSync('privatekey.pem', 'utf8')
const application = express()

application.use(cors())
application.use(express.json())
application.use(express.urlencoded({ extended: true }))

application.get('/', (request, response, next) => response.send('Karbon version 5.0'))

application.all('/uppercase', function (request, response, next) {
        let data = request.body;
        if (data.text) {
                data.text = data.text.toUpperCase();
                response.json(data);
        } else {
                response.json();
        }
})

const httpServer = http.createServer(application)
// const httpsServer = https.createServer({ key:key, cert:certificate }, application)

httpServer.listen(httpPort, () => { console.log('Listening at port ' + httpPort) })
// httpsServer.listen(httpsPort, () => { console.log('Listening at port ' + httpsPort) })