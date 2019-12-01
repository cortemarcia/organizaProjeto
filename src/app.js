const express =  require ("express")
const app = express()
const PORT = 3000



app.get('/', (request, response) => {
  response.send('Olá, mundo!')
})


app.listen(PORT)
console.info(`Rodando na porta ${PORT}`)



