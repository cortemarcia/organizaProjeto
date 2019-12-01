const express =  require ("express")
const app = express()
const PORT = 3000
const bodyParser = require('body-parser')
const alunos = require('./routes/alunosRoute')
const eventos =  require('./routes/eventosRoute')

//app.use(cors())
app.use(bodyParser.json())
app.use('/alunos', alunos)
app.use('/eventos', eventos)

app.get('/', (request, response) => {
  response.send('Seja Bem Vindo ao Organiza')
})


app.listen(PORT)
console.info(`Rodando na porta ${PORT}`)



