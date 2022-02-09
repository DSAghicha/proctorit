const { registerInstitute } = require('../controllers/authController')

const router = require('express').Router()

router.route('/institute-signup').post(registerInstitute)

module.exports = router