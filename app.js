`use strict`

const express = require("express"),
		app = express(),
		router = require('./routes/index'),
		port = process.env.PORT || 3000,
		bodyParser = require('body-parser');

require('dotenv').config()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/', router)

app.listen(port, () => {
	console.log("Server running on port : "+port);
})
