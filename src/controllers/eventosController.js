const { connect } = require('../model/Repository')
const { EventosModel } = require('../model/schemas')
const { AlunosModel }= require('../model/schemas')

connect()

const addAluno = async (request, response) => {
    const eventoId = request.params.eventoId
    const aluno = request.body
    const novoAluno = new AlunosModel(aluno)
    const evento =  await EventosModel.findById(eventoId)
     
    
    evento.alunos.push(novoAluno)    
    evento.save((error) => {
        if (error) {
            return response.status(500).send(error)
        }

        return response.status(201).send(evento)
    })
}

const postEvento = (request, response) => {

    const novoEvento = new EventosModel(request.body)

    novoEvento.save((error) => {
        if (error) {
            return response.status(500).send(error)
        }

        return response.status(201).send(novoEvento)
    })
}


const eventosAll = (request, response) => {
    EventosModel.find((error, eventos) => {

        if (error) {

            return response.status(500).send(error)
        } else {
            return response.status(200).send(eventos)
        }
    })

}

const update = (request, response) => {
    const id = request.params.id
    const body = request.body
    const options = { new: true }

    EventosModel.findByIdAndUpdate(id, body, options, (error, evento) => {
        if (error) {
            return response.status(500).send(error)
        } else if (evento) {
            return response.status(200).send(evento)
        } else {
            return response.sendStatus(404)
        }

    })
}

// ROTA DELETAR  POR ID-->
const deletar = (request, response) => {
    const id = request.params.id

    EventosModel.findOneAndDelete(id, (error) => {
        if (error) {
            return response.status(500).send(error)
        } else {
            return response.status(200).send("Evento Apagado")

        }

    })

};


module.exports = {
    postEvento,
    eventosAll,
    update,
    deletar,
    addAluno
}