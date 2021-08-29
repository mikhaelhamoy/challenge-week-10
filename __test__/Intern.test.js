const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Mykan', 111111, 'mykan@123mail.com', 'UofT');

    expect(intern.name).toBe('Mykan');
    expect(intern.id).toBe(111111);
    expect(intern.email).toBe('mykan@123mail.com');
    expect(intern.school).toBe('UofT');
});

test("gets intern's school", () => {
    const intern = new Intern('Mykan', 111111, 'mykan@123mail.com', 'UofT');
  
    expect(intern.getSchool()).toBe(intern.school);
});

test("gets intern's role", () => {
    const intern = new Intern('Mykan', 111111, 'mykan@123mail.com', 'UofT');
  
    expect(intern.getRole()).toBe('Intern');
});