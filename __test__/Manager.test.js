const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Mykan', 111111, 'mykan@123mail.com', 101);

    expect(manager.name).toBe('Mykan');
    expect(manager.id).toBe(111111);
    expect(manager.email).toBe('mykan@123mail.com');
    expect(manager.officeNum).toBe(101);
});

test("gets manager's role", () => {
    const manager = new Manager('Mykan', 111111, 'mykan@123mail.com', 101);
  
    expect(manager.getRole()).toBe('Manager');
});