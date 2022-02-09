const Institute = require('../models/Institute')
const FacultyMember = require('../models/Faculty')

exports.registerInstitute = async(req, res, next) => {
    const {
        member_name,
        member_position,
        member_email,
        member_phone,
        institute_name,
        institute_address, 
        institute_zipCode,
        institute_city, 
        institute_state,
        institute_country } = req.body

    try {
        const newMember = await FacultyMember.create({
            member_name, member_position, member_email, member_phone, member_isAdmin:true
        })

        const newInstitute = await Institute.create({
            institute_name,
            institute_admin: newMember._id,
            institute_address,
            institute_zipCode,
            institute_city,
            institute_state,
            institute_country
        })
        console.log(newMember._id.toString());
        sendToken(newInstitute,201, res)
    }
    catch (error) {
        next(error)
    }
}


const sendToken = (model, statusCode, res) => {
    // const token = user.getSignedToken()

    res.status(statusCode).json({
        success: true
        // token: token
    })
}