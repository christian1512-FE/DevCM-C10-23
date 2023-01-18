const Manager = require('../lib/Manager')

test('Manager test', ()=> {
    const manager = new Manager('Christian', 1234,"email@.com","managervalue");
    expect(manager.officenumber).toBe("managervalue")
    expect(manager
        .getofficenumber()).toBe("managervalue")
    expect(manager.getRole()).toBe("Manager")
 

})