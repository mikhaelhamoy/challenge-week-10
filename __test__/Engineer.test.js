const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Mykan', 111111, 'mykan@123mail.com', 'mykanhams');

    expect(engineer.name).toBe('Mykan');
    expect(engineer.id).toBe(111111);
    expect(engineer.email).toBe('mykan@123mail.com');
    expect(engineer.position).toBe('Engineer');
    expect(engineer.gitHub).toBe('mykanhams');
});