const mongoose = require('mongoose')

const facultySchema = new mongoose.Schema({
    member_name: {
        type: String,
        required: [true, "Faculty Member name incorrect"]
    },
    member_position: {
        type: String,
        required: [true, "Faculty Member position incorrect"]
    },
    member_email: {
        type: String,
        required: [true, "Faculty Member email incorrect    "],
        match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                'Email invalid'],
        trim: true,
        unique: [true, 'Email Already Exists']
    },
    member_phone: {
        type: String,
        required: [true, "Faculty Member phone number incorrect"]
    },
    member_isAdmin: {
        type: Boolean,
        default: false
    }
}, {
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    timestamps: true    
})

module.exports = mongoose.model("FacultyMembers", facultySchema)
