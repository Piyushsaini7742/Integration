const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/mydata')

const cardSchema = new mongoose.Schema({
    id: Number,
    name: String,
    description: String,
    price: Number,
    image: String,
})

const Card = mongoose.model('Card', cardSchema);
module.exports = Card;