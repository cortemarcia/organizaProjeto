const express = require('express');
const router = express.Router();
const controller = require("../controller/alunosController")

// ROTAS alunosSchemas
router.post ('', controller.add )
router.get ('', controller.getList)
router.patch ('/:id', controller.update)
router.delete('/:id',controller.deletar)



module.exports = router