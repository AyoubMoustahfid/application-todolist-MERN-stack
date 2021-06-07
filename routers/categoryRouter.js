const express = require('express');

const router = express.Router();

const { 
    //route GET: /all
    allCategories,
    //route POST: /create
    createCategory, 
    // route PUT: /update
    updateCategory,
    // route DELETE: /delete
    deleteCategory
 } = require('../controllers/categoryController')


router.get('/all', allCategories);

router.post('/create',  createCategory);

router.put('/update',  updateCategory);

router.delete('/delete', deleteCategory);


module.exports = router;