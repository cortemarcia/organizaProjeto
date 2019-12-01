const { connect } = require('../models/Repository')
const alunosModel = require('../models/alunosSchema')
const bcrypt = require('bcryptjs')
connect()

const add = (request, response) => {
    if (!request.body.senha) {
      return response.status(400).send('bota a senha aí')
    }
    const senhaCriptografada = bcrypt.hashSync(request.body.senha)
    request.body.senha = senhaCriptografada
    const novoAluno = new alunosModel(request.body)
  
    novoAluno.save((error) => {
      if (error) {
        return response.status(500).send(error)
      }
  
      return response.status(201).send(novoTreinador)
    })
  }

  module.exports  = add


