//Dzina Butko ID 301215947  Assignment 2 Date  05/03/2021

let mongoose = require('mongoose');
//create a model class

let contactModel = mongoose.Schema( {

    name : String,
    number : String,
    email :  String,
    
},
{
    collection: "contacts"
});
module.exports = mongoose.model('Contact', contactModel);