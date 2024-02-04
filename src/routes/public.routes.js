const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller.js');
//const { isLoggedIn } = require('../lib/auth');

const profileController = require('../controllers/profiles.controller');

//views users
router.get('/', usersController.getListUsers);
router.post('/user', usersController.postUsers);
router.get('/list-users', usersController.getListUsers );
router.get('/delete-users/:id', usersController.deleteUser);
router.get('/edit-users/:id', usersController.getUser);
router.post('/edit-users/:id', usersController.updateUser);


module.exports = router;