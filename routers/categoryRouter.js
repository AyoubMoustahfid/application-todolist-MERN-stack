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
    deleteCategory,
    // route PARAM
    categoryId
 } = require('../controllers/categoryController')


router.get('/all', allCategories);

router.post('/create',  createCategory);

router.put('/update/:categoryId',  updateCategory);

router.delete('/delete/:categoryId', deleteCategory);

router.param('categoryId', categoryId);


module.exports = router;