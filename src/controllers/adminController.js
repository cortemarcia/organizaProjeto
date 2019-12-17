const { connect } = require('../model/Repository')
const { AdminModel } = require('../model/schemas')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const SEGREDO = process.env.SEGREDO

connect()


const addAdmin = (request, response) => {
  const senhaCriptografada = bcrypt.hashSync(request.body.senha)
  request.body.senha = senhaCriptografada
  request.body.grupo = 'admin'
  const novoAdmin = new AdminModel(request.body)

  novoAdmin.save((error) => {
    if (error) {
      return response.status(500).send(error)
    }

    return response.status(201).send(novoAdmin)
  })
}

const adminAll = (request, response) => {
  AdminModel.find((error, admin) => {

    if (error) {

      return response.status(500).send(error)
    } else {
      return response.status(200).send(admin)
    }
  })
}


// const addStudent = (request, response) => {
//   const senhaCriptografada = bcrypt.hashSync(request.body.senha)
//   request.body.senha = senhaCriptografada
//   request.body.grupo = 'comum'
//   const novoStudent = new AdminModel(request.body)

//   novoStudent.save((error) => {
//     if (error) {
//       return response.status(500).send(error)
//     }

//     return response.status(201).send(novoStudent)
//   })
// }

const login = async (request, response) => {
  const adminEncontrado = await AdminModel.findOne({ email: request.body.email })

  if (adminEncontrado) {
    const senhaCorreta = bcrypt.compareSync(request.body.senha, adminEncontrado.senha)

    if (senhaCorreta) {
      const token = jwt.sign(
        {
          grupo: adminEncontrado.grupo
        },
        SEGREDO
      )

      return response.status(200).send({ token })
    }

    return response.status(401).send('Senha incorreta.')
  }

  return response.status(404).send('Administradora não encontrada.')
}


const remove = (request, response) => {
  const id = request.params.id

  AdminModel.findByIdAndDelete(id, (error, admin) => {
    if (error) {
      return response.status(500).send(error)
    }

    if (admin) {
      return response.status(200).send('Adminstradora apagada !')
    }

    return response.status(404).send('Administradora não encontrado.')
  })
}


const update = (request, response) => {
  const id = request.params.id
  const body = request.body
  const options = { new: true }

  AdminModel.findByIdAndUpdate(id, body, options, (error, admin) => {
    if (error) {
      return response.status(500).send(error)
    } else if (admin) {
      return response.status(200).send(admin)
    } else {
      return response.sendStatus(404)
    }

  })
}





module.exports = {
  addAdmin,
  adminAll,
  // addStudent,
  login,
  remove,
  update

}