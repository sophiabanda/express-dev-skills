const Skill = require('../models/skills');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
}

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
    })
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.skill)
    })
}

function newSkill(req, res) {
    res.render('skills/new', {title: 'New Skill'});
}

function create(req, res) {
    // Models are responsible for CRUDing the data
    Skill.create(req.body);
    res.redirect('/skills');
}

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.skill); 
    res.redirect('/skills');
}