const express = require('express')
const { getRandoms } = require('../controllers/randomController')

const router = express.Router()

router.get('/',getRandoms)

module.exports = router