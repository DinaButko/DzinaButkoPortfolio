let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');
let contactController = require('../controllers/contact');

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}


/* GET route for the contacts list page - READ operation */
router.get('/', contactController.displayContactList);

/* GET route for the displaying the Add Contacts list page - CREATE operation */
router.get('/add', requireAuth, contactController.displayAddPage);


/* POST route for the processing the  Add Contacts list page - CREATE operation */

router.post('/add', requireAuth, contactController.processAddPage);


/* GET route for the displaying the  Edit Contacts list page - UPDATE operation */
router.get('/edit/:id', requireAuth, contactController.displayEditpage);


/* POST route for the processing the  Edit Contacts list page - UPDATE operation */
router.post('/edit/:id', requireAuth, contactController.processEditPage);

/* GET to perform contacts deletion - DELETE operation */
router.get('/delete/:id', requireAuth, contactController.performDeletePage);


module.exports = router;
