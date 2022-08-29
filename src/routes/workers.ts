const express = require('express')
const router = express.Router({ mergeParams: true })
import WorkerController from "../app/controllers/WorkerController";

router.post('/turno', WorkerController.executeTurno)
router.post('/funcionario', WorkerController.executeFuncionario)
router.post('/setor', WorkerController.executeSetor)

module.exports = router