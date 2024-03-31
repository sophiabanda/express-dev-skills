module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
}

const developerSkills = [
    {skill: 'HTML', proficiency: 'Professional'},
    {skill: 'CSS', proficiency: 'Aspiring Professional'},
    {skill: 'Javascript', proficiency: 'Master, obviously...'},
    {skill: 'Node.js', proficiency: 'Beginner'},
    {skill: 'Express.js', proficiency: 'Never heard of it'},
]

function getAll() {
    return developerSkills;
}

function getOne(skillParam) {
    return developerSkills.find((s) => s.skill === skillParam);
}

function create(skill) {
    developerSkills.push(skill);
}

function deleteOne(skill) {
    skill.deleteOne(req.params.skill);
    // Find the index of the skill
    const idx = developerSkills.findIndex(skill => skill.skill === skill);
    developerSkills.splice(idx, 1)
}