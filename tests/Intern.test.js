const Intern = require('../lib/Intern')

test('Intern test', ()=> {
    const intern = new Intern('Christian', 1234,"email@.com","internschool");
    expect(intern.school).toBe("internschool")
    expect(intern.getschool()).toBe("internschool")
    expect(intern.getRole()).toBe("Intern")
 

})