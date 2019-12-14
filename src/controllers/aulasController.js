const { connect } = require('../model/Repository')
const { AulasModel } = require('../model/schemas')
connect()


// ROTA POST-->
const addAulas = (request, response) => {

    const novaAula = new AulasModel(request.body)

    novaAula.save((error) => {
        if (error) {
            return response.status(500).send(error)
        }

        return response.status(201).send(novaAula)
    })
}

// ROTA GET  CADASTRO NOVO-->
const aulasAll = (request, response) => {
    AulasModel.find((error, aulas) => {

        if (error) {

            return response.status(500).send(error)
        } else {
            return response.status(200).send(aulas)
        }
    })

}

// const aulasAllWeek = (request, response) => {
//     const semanaId = request.params.semanaId
//     AulasModel.find(semanaId,(error, semana) => {

//         if (error) {

//             return response.status(500).send(error)
//         } else {
//             return response.status(200).send(semana)
//         }
//     })

// }

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
const deletar = (request, response) => {
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
    addAulas,
    aulasAll,
    update,
    deletar
    // aulasAllWeek
    
}