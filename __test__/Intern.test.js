const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Mykan', 111111, 'mykan@123mail.com', 'UofT');

    expect(intern.name).toBe('Mykan');
    expect(intern.id).toBe(111111);
    expect(intern.email).toBe('mykan@123mail.com');
    expect(intern.position).toBe('Intern');
    expect(intern.school).toBe('UofT');
});