const express = require('express')
const cors = require('cors')
const application = express()
const port = 3000

application.use(cors())
application.use(express.json())
application.use(express.urlencoded({ extended: true }))

application.get('/', (request, response, next) => response.send('Karbon version 1.5'))

application.post('/uppercase', function (request, response, next) {
	let data = request.body;
	if (data.text) {
		data.text = data.text.toUpperCase();
		response.json(data);
	} else {
		response.json();
	}
})

application.listen(port, () => console.log(`Listening at http://localhost:${port}`))