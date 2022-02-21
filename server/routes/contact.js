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
           
          res.render('contact/list', {title: 'Contact List', ContactList: contactList}) 

        }
    });
});

/* GET route for the displaying Athe dd Contacts list page - CREATE operation */
router.get('/add', (req, res, next) => {
    res.render('contact/add', {title: 'Add Contact'}) 

});


/* POST route for the processing the  Add Contacts list page - CREATE operation */

router.post('/add', (req, res, next) => {
    let newContact = Contact({
        "name": req.body.name,
        "phone": req.body.number,
        "email": req.body.email

    });
Contact.create(newContact, (err, Contact) => {
    if(err)
    {
        console.log(err);
        res.end(err);
    }
    else{
        //refresh the contact list
        res.redirect('/contact-list');
    }
})
});


/* GET route for the displaying the  Edit Contacts list page - UPDATE operation */
router.get('/edit/:id', (req, res, next) => {
    let id = req.params.id;

    Contact.findById(id, (err, contactToEdit) => {
        if (err)
        {
                console.log(err);
                res.end(err);
        }
        else 
        {
                    //show the edit view
             res.render('contact/edit', {title: 'Edit Contact', contact: contactToEdit})
        }
    });

});


/* POST route for the processing the  Edit Contacts list page - UPDATE operation */
router.post('/add', (req, res, next) => {
 let id = req.params.id

 let updateContact = Contact({
     "_id": id, 
    "name": req.body.name,
    "phone": req.body.number,
    "email": req.body.email
 });

 Contact.updateOne({_id: id}, updateCpntact, (err) => {
     if(err)
     {
         console.log(err);
         res.end(err);
     }
     else 
     {
          //refresh the contact list
        res.redirect('/contact-list');
     }

 });
});   

/* GET to perform contacts deletion - DELETE operation */
router.get('/delete/:id', (req, res, next) => {
    let id = req.params.id;
    Contact.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else 
        {
             //refresh the contact list
           res.redirect('/contact-list');
        }
    });

});


module.exports = router;
