const express = require('express');
const router = express.Router();

const controller = require("../controllers/AlunosController")


router.post('', controller.add)

modulo.exports = router