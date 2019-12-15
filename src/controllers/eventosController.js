const { connect } = require('../model/Repository')
const { EventosModel } = require('../model/schemas')
const { AlunosModel } = require('../model/schemas')

connect()

const addAluno = async (request, response) => {
    const eventoId = request.params.eventoId
    const aluno = request.body
    const novoAluno = new AlunosModel(aluno)
    const evento = await EventosModel.findById(eventoId)


    evento.alunos.push(novoAluno)
    evento.save((error) => {
        if (error) {
            return response.status(500).send(error)
        }

        return response.status(201).send(evento)
    })
}
const addEvent = (request, response) => {

    const novoEvento = new EventosModel(request.body)

    novoEvento.save((error) => {
        if (error) {
            return response.status(500).send(error)
        }

        return response.status(201).send(novoEvento)
    })
}


const deleteAluno = async (request, response) => {
    const eventosId = request.params.eventoId
    const alunosId = request.params.alunoId

    const foundEvent = await EventosModel.findById(eventosId)
    const aluno = foundEvent.alunos.find(item => item._id == alunosId)

    foundEvent.alunos.remove(aluno);
    foundEvent.save((error) => {
        if (error) {
            return response.status(500).send(error)
        } else {
            return response.status(200).send("Aluno Apagado")

        }
    })

}

const deleteEvent = (request, response) => {
    const id = request.params.id

    EventosModel.findOneAndDelete(id, (error) => {
        if (error) {
            return response.status(500).send(error)
        } else {
            return response.status(200).send("Evento Apagado")

        }

    })

};

const eventsAll = (request, response) => {
    EventosModel.find((error, eventos) => {

        if (error) {

            return response.status(500).send(error)
        } else {
            return response.status(200).send(eventos)
        }
    })

}



const findByTurmaName = (request, response) => {
    const turma = request.query.nomeTurma
    EventosModel.find({ turma }, (error, turmas) => {
        if (error) {
            return response.status(500).send(error)
        } else {
            return response.status(200).send(turmas)
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







module.exports = {
    addEvent,
    addAluno,
    deleteAluno,
    deleteEvent,
    eventsAll,
    findByTurmaName,
    update

}