const express =  require ("express")
const app = express()
const cors = require('cors')
const PORT = 3001
const bodyParser = require('body-parser')
const eventos =  require('./routes/eventosRoute')
const aulas =  require('./routes/aulasRoute')
const admin = require('./routes/adminRoute')

app.use(cors())
app.use(bodyParser.json())
app.use('/eventos', eventos)
app.use('/aulas', aulas)
app.use('/admin', admin)
app.get('/', (request, response) => {
  response.send('Seja Bem Vindo ao Organiza')
})

app.listen(PORT)
console.info(`Rodando na porta ${PORT}`)




