const mongoose = require('mongoose')

const connectDB = async() => {
    await mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(console.log("DB Connected successfully"))
    .catch(err => {console.log(err)})

}

module.exports = connectDB
