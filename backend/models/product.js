const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({

    image : {
        type : String,
        required : true
    }, 
    title : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    }
})

const product = mongoose.model("Products",productSchema);

module.exports = product;