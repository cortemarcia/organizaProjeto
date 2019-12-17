const express = require('express');
const router = express.Router();
const controller = require("../controllers/adminController")
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
//       if (decoded.grupo === 'comum' || decoded.grupo === 'admin') {
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
      if (error) {
        autenticado = false
      } else {
        if (decoded.grupo === 'admin') {
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
router.get('',autenticarAdmin,controller.adminAll)
router.post('', controller.addAdmin)
router.delete('/:id', autenticarAdmin, controller.remove)
router.patch ('/:id', autenticarAdmin, controller.update)
router.post('/login', controller.login)
// router.post('/aluno',autenticarAdmin, controller.addStudent)

module.exports = router