const { connect } = require('../model/Repository')
const alunosModel = require('../model/alunosSchema')
//const bcrypt = require('bcryptjs')
connect()


// ROTA POST-->
const add = (request, response) => {

    const novoAluno = new alunosModel(request.body)

    novoAluno.save((error) => {
        if (error) {
            return response.status(500).send(error)
        }

        return response.status(201).send(novoAluno)
    })
}

// ROTA GET  CADASTRO NOVO-->
const alunosAll = (request, response) => {
    alunosModel.find((error, alunos) => {

        if (error) {

            return response.status(500).send(error)
        } else {
            return response.status(200).send(alunos)
        }
    })

}

// ROTA PATCH, UPDTAE POR ID -->
const update = (request, response) => {
    const id = request.params.id
    const body = request.body
    const options = { new: true }

    alunosModel.findByIdAndUpdate(id, body, options, (error, contato) => {
        if (error) {
            return response.status(500).send(error)
        } else if (contato) {
            return response.status(200).send(contato)
        } else {
            return response.sendStatus(404)
        }

    })
}

// ROTA DELETAR  POR ID-->
const deletar = (request, response) => {
    const id = request.params.id

    alunosModel.findOneAndDelete(id, (error) => {
        if (error) {
            return response.status(500).send(error)
        } else {
            return response.status(200).send("Apagou")

        }

    })

};

module.exports = {
    add,
    alunosAll,
    update,
    deletar
}


