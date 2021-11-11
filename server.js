const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const User = require('./model/user')

mongoose.connect('mongodb://localhost:27017/atm-details', {
    useNewUrlparser: true,
    useUnifiedTopology: true
})

const app = express()
app.use('/', express.static(path.join(__dirname, 'static')))
app.use(bodyParser.json())

app.post('/api/details', async (req, res) => {
    console.log(req.body);
    res.json({ status: 'ok' })
})

app.listen(4000, () => {
    console.log('Server up at 4000');
})