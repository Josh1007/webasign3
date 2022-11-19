let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const Car = require('../models/Car');

let carController = require('../controller/car');



router.get('/',carController.displayCarList);

/* --- Add --- */
router.get('/add',carController.displayAddPage);

router.post('/add',carController.processAddPage);



/* --- Edit --- */
router.get('/edit/:id',carController.displayEditPage);

router.post('/edit/:id',carController.processEditPage);

/* --- Delete --- */
router.get('/delete/:id',carController.displayDeletePage);







module.exports=router;

