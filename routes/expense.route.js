const express = require('express');
const {register,
    login,
    logout,
    createexpense,
    removeexpense,
    updateexpense,
    getExpense,
}=require('../controllers/expense.controller');

const router = express.Router();
router.post('/register',register);
router.post('/login',login);
router.get('/logout',logout);
router.post('/createexpense',createexpense);
router.get('/getExpense',getExpense);
router.delete('/removeexpense/:id',removeexpense);
router.put('/updateexpense/:id',updateexpense);
module.exports = router;