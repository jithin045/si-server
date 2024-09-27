const companies = require('../Models/companyModel')

exports.addCompanies = async (req, res) => {
    const { cname, phone, address } = req.body
    console.log("Inside Register function!!");
    try {
        const existingCompany = await companies.findOne({ cname })
        if (existingCompany) {
            res.status(401).json("Company Already Exist!!")
        } else {
            const newCompany = new companies({
                cname, phone, address
            })
            await newCompany.save()
            res.status(201).json(newCompany)
            console.log(success)
        }

    } catch (err) {
        res.status(406).json(err)
    }
}

exports.allCompanys = async (req, res) => {
    const cname = req.payload
    try {
        const result = await companies.find({ cname })
        if (result) {
            res.status(200).json(result)
        }
        else {
            res.status(401).json("No Companies Available!!")
        }
    }
    catch (err) {
        console.log(err);
        res.status(406).json(err)
    }
}