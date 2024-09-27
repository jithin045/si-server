const express = require('express')
const companyController = require('../Controllers/companyController')
const router = express.Router()


router.post('/addcompanies',companyController.addCompanies)
router.get('/all-companys',companyController.allCompanys)



module.exports = router