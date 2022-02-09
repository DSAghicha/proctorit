const mongoose = require('mongoose')

const instituteSchema = new mongoose.Schema({
    institute_name: {
        type: String,
        required: [true, "Institute name incorrect!"],
        trim: true
    },
    institute_admin: {
        type: mongoose.Types.ObjectId,
        ref: "FacultyMembers",
    },
    institute_address: {
        type: String,
        required: [true, "Institute street address incorrect!"],
        trim: true
    },
    institute_zipCode: {
        type: Number,
        required: [true, "Institute zip code incorrect!"],
    },
    institute_city: {
        type: String,
        required: [true, "Institute city incorrect!"],
        trim: true
    },
    institute_state: {
        type: String,
        required: [true, "Institute state incorrect!"],
        trim: true
    },
    institute_country: {
        type: String,
        required: [true, "Institute country incorrect!"],
        trim: true
    },
}, {
    timestamps: true
})

module.exports = mongoose.model("Institutes", instituteSchema)
