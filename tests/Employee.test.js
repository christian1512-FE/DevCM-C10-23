const Employee = require('../lib/Employee')

test('employee test', ()=> {
    const employee = new Employee('Christian', 1234,"email@.com");
    expect(employee.name).toBe("Christian")
    expect(employee.getName()).toBe("Christian")
    expect(employee.id).toBe(1234)
    expect(employee.getId()).toBe(1234)
    expect(employee.email).toBe("email@.com")
    expect(employee.getEmail()).toBe("email@.com")
    expect(employee.getRole()).toBe("Employee")


})