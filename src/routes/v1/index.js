const express = require('express');
const router = express.Router();
const {help} = require('../../controllers/help.controller');

router.get('/help',help);

module.exports = router;