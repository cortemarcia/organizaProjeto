const { connect } = require('../model/Repository')
const eventosModel = require('../model/eventosSchema')

connect()

const addEvento = (request, response) => {
   
    const novoEvento = new eventosModel(request.body)

    novoEvento.save((error) => {
        if (error) {
            return response.status(500).send(error)
        }

        return response.status(201).send(novoEvento)
    })
}


const eventosAll = (request, response) => {
    eventosModel.find((error, eventos) => {

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

    eventosModel.findByIdAndUpdate(id, body, options, (error, evento) => {
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

    eventosModel.findOneAndDelete(id, (error) => {
        if (error) {
            return response.status(500).send(error)
        } else {
            return response.status(200).send("Evento Apagado")

        }

    })

};


module.exports = { addEvento,
eventosAll, 
update,
deletar}