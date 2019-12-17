const express =  require ("express")
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const eventos =  require('./routes/eventosRoute')
const aulas =  require('./routes/aulasRoute')
const admin = require('./routes/adminRoute')
const index= require('./routes/index')


app.use(cors())
app.use(bodyParser.json())
app.use('/eventos', eventos)
app.use('/aulas', aulas)
app.use('/admin', admin)
app.use('/',index)

module.exports= app




