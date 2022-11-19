let mongoose = require('mongoose');

let CarModel = mongoose.Schema({
    Car_Model: String,
    Owner: String,
    Year: Number,
    Description: String,
    Price: String
},
{
    collection: "Cars"
}

);
module.exports = mongoose.model('Cars', CarModel)