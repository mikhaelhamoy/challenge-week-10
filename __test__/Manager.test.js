const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Mykan', 111111, 'mykan@123mail.com', 101);

    expect(manager.name).toBe('Mykan');
    expect(manager.id).toBe(111111);
    expect(manager.email).toBe('mykan@123mail.com');
    expect(manager.position).toEqual(expect.any(String));
    expect(manager.officeNum).toBe(101);
});