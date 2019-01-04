var express = require('express');
var router = express.Router();

// Import contact controller
var messageController = require('../controllers/MessageController.js');

// Contact routes
router.route('/add')
    .get(messageController.index)
    .post(messageController.new);
module.exports = router;
