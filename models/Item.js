const mongoose = require('mongoose')

const ItemSchema = mongoose.Schema({
    name: {
        type: String, 
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('item', ItemSchema)