// const { connect } = require('../model/Repository')
// const { AlunosModel } = require('../model/schemas')
// const { EventosModel } = require('../model/schemas')
// //const bcrypt = require('bcryptjs')
// connect()



// // const addEvento = async (request, response) => {
// //     const alunoId = request.params.alunoId
// //     const evento = request.body
// //     const novoEvento = new EventosModel(evento)
// //     const aluno = await AlunosModel.findById(alunoId)


// //     aluno.eventos.push(novoEvento)
// //     aluno.save((error) => {
// //         if (error) {
// //             return response.status(500).send(error)
// //         }

// //         return response.status(201).send(aluno)
// //     })
// // }



// // ROTA POST-->
// const add = (request, response) => {

//     const novoAluno = new AlunosModel(request.body)

//     novoAluno.save((error) => {
//         if (error) {
//             return response.status(500).send(error)
//         }

//         return response.status(201).send(novoAluno)
//     })
// }

// // ROTA GET  CADASTRO NOVO-->
// const alunosAll = (request, response) => {
//     AlunosModel.find((error, alunos) => {

//         if (error) {

//             return response.status(500).send(error)
//         } else {
//             return response.status(200).send(alunos)
//         }
//     })

// }

// // ROTA PATCH, UPDTAE POR ID -->
// const update = (request, response) => {
//     const id = request.params.id
//     const body = request.body
//     const options = { new: true }

//     AlunosModel.findByIdAndUpdate(id, body, options, (error, contato) => {
//         if (error) {
//             return response.status(500).send(error)
//         } else if (contato) {
//             return response.status(200).send(contato)
//         } else {
//             return response.sendStatus(404)
//         }

//     })
// }

// // ROTA DELETAR  POR ID-->
// const deletar = (request, response) => {
//     const id = request.params.id

//     AlunosModel.findOneAndDelete(id, (error) => {
//         if (error) {
//             return response.status(500).send(error)
//         } else {
//             return response.status(200).send("Apagou")

//         }

//     })

// };

// module.exports = {
//     add,
//     alunosAll,
//     update,
//     deletar
//     // addEvento
// }


