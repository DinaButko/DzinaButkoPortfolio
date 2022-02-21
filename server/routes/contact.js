let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');


//connect to our Contact model
let Contact = require('../models/contact');

let contactController = require('../controllers/contact');

/* GET route for the contacts list page - READ operation */
router.get('/', contactController.displayContactList);

/* GET route for the displaying the Add Contacts list page - CREATE operation */
router.get('/add', contactController.displayAddPage);


/* POST route for the processing the  Add Contacts list page - CREATE operation */

router.post('/add', contactController.processAddPage);


/* GET route for the displaying the  Edit Contacts list page - UPDATE operation */
router.get('/edit/:id', contactController.displayEditpage);


/* POST route for the processing the  Edit Contacts list page - UPDATE operation */
router.post('/edit/:id', contactController.processEditPage);

/* GET to perform contacts deletion - DELETE operation */
router.get('/delete/:id', contactController.performDeletePage);


module.exports = router;
