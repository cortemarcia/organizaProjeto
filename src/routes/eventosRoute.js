const express = require('express');
const router = express.Router();
const controller1 = require("../controllers/eventosController")


router.post ('',controller1.addEvento)
router.get ('', controller1.eventosAll)
router.patch ('/:id', controller1.update)
router.delete('/:id',controller1.deletar)




module.exports = router