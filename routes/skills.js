var express = require('express');
var router = express.Router();
var skillsController = require('../controllers/skills');

/* All routes here begin with /skills */

// GET List of Skills
router.get('/', skillsController.index)


module.exports = router;