const express = require('express')
const router = express.Router({ mergeParams: true })
import LogController from "../app/controllers/LogController"; 

router.get('/', LogController.get)

module.exports = router