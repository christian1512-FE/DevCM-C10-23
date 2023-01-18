const Engineer = require('../lib/Engineer')

test('Engineer test', ()=> {
    const engineer = new Engineer('Christian', 1234,"email@.com","gituser");
    expect(engineer.gitprofile).toBe("gituser")
    expect(engineer.getgit()).toBe("gituser")
    expect(engineer.getRole()).toBe("Engineer")
 

})