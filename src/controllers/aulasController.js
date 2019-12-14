const { connect } = require('../model/Repository')
const { AulasModel } = require('../model/schemas')
connect()


const addAula = (request, response) => {

    const novaAula = new AulasModel(request.body)

    novaAula.save((error) => {
        if (error) {
            return response.status(500).send(error)
        }

        return response.status(201).send(novaAula)
    })
}


const findByTurmaName = (request, response) => {
    const turma = request.query.turma
    AulasModel.findOne({ turma } == turma, (error, turmas) => {
        if (error) {
            return response.status(500).send(error)
        } else {
            return response.status(200).send(turmas)
        }
    })

}


const classAll = (request, response) => {
    AulasModel.find((error, aulas) => {

        if (error) {

            return response.status(500).send(error)
        } else {
            return response.status(200).send(aulas)
        }
    })

}




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
    findByTurmaName
}