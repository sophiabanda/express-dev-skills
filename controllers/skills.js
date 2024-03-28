const Skill = require('../models/skills');

module.exports = {
    index
}

function index(req, res) {
    res.render('skills/skills', {
        skills: Skill.getAll(),
    })
}