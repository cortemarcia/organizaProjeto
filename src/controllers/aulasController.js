const { connect } = require('../model/Repository')
const { AulasModel } = require('../model/schemas')
connect()


// ROTA POST-->
const addAula = (request, response) => {

    const novaAula = new AulasModel(request.body)

    novaAula.save((error) => {
        if (error) {
            return response.status(500).send(error)
        }

        return response.status(201).send(novaAula)
    })
}


const oneClass = (request, response) => {
    const turma = request.params.turma
    AulasModel.find(AulasModel => AulasModel.turma === turma, ((error, turma) => {
        if (error) {
            return response.status(500).send(error)
        } else {
            return response.status(200).send(turma)
        }
    })
}


// ROTA GET  CADASTRO NOVO-->
const classAll = (request, response) => {
    AulasModel.find((error, aulas) => {

        if (error) {

            return response.status(500).send(error)
        } else {
            return response.status(200).send(aulas)
        }
    })

}



// ROTA PATCH, UPDTAE POR ID -->
const update = (request, response) => {
    const id = request.params.id
    const body = request.body
    const options = { new: true }

    AulasModel.findByIdAndUpdate(id, body, options, (error, contato) => {
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
const remove = (request, response) => {
    const id = request.params.id

    AulasModel.findOneAndDelete(id, (error) => {
        if (error) {
            return response.status(500).send(error)
        } else {
            return response.status(200).send("Apagou")

        }

    })

};

module.exports = {
    addAula,
    classAll,
    update,
    remove,
    oneClass
}