let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');


//connect to our Contact model

let Contact = require('../models/contact');


/* GET route for the contacts list page - READ operation */

router.get('/', (req,res,next) => {
    Contact.find((err, contactList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(ContactList);
           
          res.render('contactlist', {title: 'Contact List', ContactList: contactList}) 

        }
    });
});

module.exports = router;