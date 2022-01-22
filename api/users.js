const UserController = require('../controllers/users');
const express = require('express');

const router = express.Router();

router.get('/all', UserController.findAllUsers);

router.get('/:id', UserController.findById);

router.post('/add', UserController.addUser);

module.exports = router;