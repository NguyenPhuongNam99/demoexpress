const mongoose = require('mongoose')
const schema = mongoose.Schema;

const coureses = new schema({
    name: {type: String, maxLength: 255},
    course: {type: String, maxLength: 255},
    decription: {type: String, maxLength: 600},
    image: {type: String, maxLength :300},
})
module.exports = mongoose.model('courses', coureses);