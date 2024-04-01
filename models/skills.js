module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
}

const developerSkills = [
    {id: 100123, skill: 'HTML'},
    {id: 100124, skill: 'CSS'},
    {id: 100125, skill: 'Javascript'},
    {id: 100126, skill: 'Node.js'},
    {id: 100127, skill: 'Express.js'},
]

function getAll() {
    console.log(developerSkills)
    return developerSkills;
}

function getOne(id) {
    id = parseInt(id);
    return developerSkills.find((skill) => skill.id === id);
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.proficiency = 'Beginner';
    developerSkills.push(skill);
}

function deleteOne(id) {
    // Find the index of the skill
    const idx = developerSkills.findIndex(skill => skill.id === id);
    developerSkills.splice(idx, 1)
}

function update(id, udpatedSkill) {
    id = parseInt(id);
    const skill = developerSkills.find((skill) => skill.id === id);
    Object.assign(skill, udpatedSkill);
}