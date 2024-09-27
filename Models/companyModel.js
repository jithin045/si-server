const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
    cname: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true,
    }
})

const companies = mongoose.model('companies', companySchema)

module.exports = companies