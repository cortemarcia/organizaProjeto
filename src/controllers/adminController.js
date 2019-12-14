const { connect } = require('../model/Repository')
const  {AdminModel} = require('../model/schemas')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const SEGREDO = 'MIICXAIBAAKBgQCOl54HaBM/WiL/jPPdFGjm9f8VprUst1J+vs7G/YRGRHYLGqt+M/ljAhcROPy3FdaVi2smqqyZhf4d+EZ9lKM6LVed91sxvcyMFEp6x8R2KS9wIzUtJ6r1MAIKd8HURmbaN4V2TV/FLeOUANRCZ+QhYEy+eNbuVIJANYtXBUSn8QIDAQABAoGBAIuVS/MAJGdNuxjiSA5Q3mfIw03UhWIiirTb39rXbNbESbGRB/NguW38K8yGNoya6hY2BkwxowgeLKX11js0d5sSHgEgL+pDQtXshHu7vlYU0ksHwfmD/R8+ZHJH6F6L0vuzs4NoVK/8iQHFLboUjF2sORyuLHbBmFZQWhInet8pAkEA0OlL2uHCYhkNuokJ9H+OnJEqKS2BtYSkH3Hrh2opZg2HtvUtXEIxzmj/95CzxMXQtNJhQMK3ekvnF3Upcj2avwJBAK67i8OEKM2jerbFKrBqr6/kUkZeyHLA8I4L2C3/3nKPGUj/GAc2xxuK1XxnpC0e3Wqz5OMwzkWU4Ynblsdq2U8CQHu9U6LICbzVHh6YwP7C9xOhoBlXzPZZJGVDssA4j2DVLsednUqCIsIhy0s1uGUazi3sVpJnQwn7H1vzl6ME/j0CQAT7qj+4LCW5LM27j70aPcppW4NQPq0vHW0fn1moe2KO/CydwcSq5kC909rJZeA3ih755GQqRyeq2EfDMGidfncCQD770Za6sJP1/i1vcdoWuWYnhpiU8TNKjFb2vJEN598amcyJV9PlAAdEkszh6EDA76t6/yT6NoUn/y9x4YskzQo='

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
            } else if (evento) {
                return response.status(200).send(admin)
            } else {
                return response.sendStatus(404)
            }
    
        })
    }


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
    
    

  module.exports = {
    addAdmin,
    adminAll, 
    remove,
    update,
    login
    
  }