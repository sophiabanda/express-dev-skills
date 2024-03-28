module.exports = {
    getAll,
    getOne,
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