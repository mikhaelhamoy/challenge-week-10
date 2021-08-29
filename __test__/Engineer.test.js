const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Mykan', 111111, 'mykan@123mail.com', 'mykanhams');

    expect(engineer.name).toBe('Mykan');
    expect(engineer.id).toBe(111111);
    expect(engineer.email).toBe('mykan@123mail.com');
    expect(engineer.gitHub).toBe('mykanhams');
});

test("gets engineer's GitHub account", () => {
    const engineer = new Engineer('Mykan', 111111, 'mykan@123mail.com', 'mykanhams');
  
    expect(engineer.getGithub()).toBe(engineer.gitHub);
});

test("gets engineer's role", () => {
    const engineer = new Engineer('Mykan', 111111, 'mykan@123mail.com', 'mykanhams');
  
    expect(engineer.getRole()).toBe('Engineer');
});