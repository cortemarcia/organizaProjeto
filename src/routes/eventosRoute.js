const express = require('express');
const router = express.Router();
const controller1 = require("../controllers/eventosController")


router.post ('', controller.addEvento)
router.get ('', controller.eventosAll)
router.patch ('/:id', controller.update)
router.delete('/:id',controller.deletar)




module.exports = router