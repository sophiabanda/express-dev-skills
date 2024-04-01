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
router.get('/:id/edit', skillsController.edit)

// GET /skills/:id - One Skill
router.get('/:id', skillsController.show);

// DELETE /skills/:id - One Skill
router.delete('/:id', skillsController.delete);

// PUT /skills/:id
router.put('/:id', skillsController.update);


module.exports = router;