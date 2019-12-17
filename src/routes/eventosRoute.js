const express = require('express');
const router = express.Router();
const controller1 = require("../controllers/eventosController")
const jwt = require('jsonwebtoken')
const SEGREDO = process.env.SEGREDO


// const autenticar = (request, response, next) => {
//   const authHeader = request.get('authorization')
//   let autenticado = false

//   if (!authHeader) {
//     return response.status(401).send('Você precisa fazer login!')
//   }

//   const token = authHeader.split(' ')[1]

//   jwt.verify(token, SEGREDO, (error, decoded) => {
//     if (error) {
//       autenticado = false
//     } else {
//       if (decoded.grupo == 'comum' || decoded.grupo == 'admin') {
//         autenticado = true
//       } else {
//         autenticado = false
//       }
//     }
//   })

//   if (!autenticado) {
//     return response.status(403).send('Acesso negado.')
//   }

//   next()
// }


const autenticarAdmin = (request, response, next) => {
  const authHeader = request.get('authorization')
  let autenticado = false

  if (!authHeader) {
    return response.status(401).send('Você precisa fazer login!')
  }

  const token = authHeader.split(' ')[1]

  jwt.verify(token, SEGREDO, (error, decoded) => {
    console.log(decoded)
    console.log(error)
    if (error) {
      autenticado = false
    } else {
      if (decoded.grupo == 'admin') {
        autenticado = true
      } else {
        autenticado = false
      }
    }
  })

  if (!autenticado) {
    return response.status(403).send('Acesso negado.')
  }

  next()
}
router.get('', controller1.eventsAll)
router.post('',autenticarAdmin,controller1.addEvent)
router.patch('/:id', autenticarAdmin, controller1.update)
router.delete('/:id', autenticarAdmin, controller1.deleteEvent)
router.post('/:eventoId/alunos', controller1.addAluno)
router.delete('/:eventoId/:alunoId', autenticarAdmin, controller1.deleteAluno)
router.get('/:turma?/eventos', autenticarAdmin, controller1.findByTurmaName)



module.exports = router