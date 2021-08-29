const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Mykan', 111111, 'mykan@123mail.com');

    expect(employee.name).toBe('Mykan');
    expect(employee.id).toBe(111111);
    expect(employee.email).toBe('mykan@123mail.com');
});

test("gets employee's name", () => {
    const employee = new Employee('Mykan', 111111, 'mykan@123mail.com');
  
    expect(employee.getName()).toBe(employee.name);
});

test("gets employee's id", () => {
    const employee = new Employee('Mykan', 111111, 'mykan@123mail.com');
  
    expect(employee.getId()).toBe(employee.id);
});

test("gets employee's email", () => {
    const employee = new Employee('Mykan', 111111, 'mykan@123mail.com');
  
    expect(employee.getEmail()).toBe(employee.email);
});

test("gets employee's role", () => {
    const employee = new Employee('Mykan', 111111, 'mykan@123mail.com');
  
    expect(employee.getRole()).toBe('Employee');
});