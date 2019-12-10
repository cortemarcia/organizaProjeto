const express = require('express');
const router = express.Router();
const controller = require("../controllers/aulasController")

// ROTAS aulasSchemas
router.post ('', controller.addAulas )
router.get ('', controller.aulasAll)
router.patch ('/:id', controller.update)
router.delete('/:id',controller.deletar)




module.exports = router