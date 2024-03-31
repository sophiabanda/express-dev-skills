var express = require('express');
var router = express.Router();
var skillsController = require('../controllers/skills');

/* All routes here begin with /skills */

// GET /skills - List of Skills
router.get('/', skillsController.index);

// GET/skills/new - New Skill
router.get('/new', skillsController.new); //---> Define before show or will error out

// POST /skills - Create New Skill
router.post('/', skillsController.create);

// GET /skills/edit - Page to edit skill
router.get('/:skill/edit', skillsController.edit)

// GET /skills/:skill - One Skill
router.get('/:skill', skillsController.show);

// DELETE /skills/:skill - One Skill
router.delete('/:skill', skillsController.delete);

// PUT /skills/:skill
router.put('/:skill', skillsController.update);


module.exports = router;