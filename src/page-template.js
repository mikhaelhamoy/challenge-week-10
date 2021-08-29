const generatePage = (manager, engineers, interns) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    </head>
    <body>
        <header class="bg-danger m-3">
            <h1 class="text-center text-light py-4 fs-3">My Team</h1>
        </header>
        <main class="row mx-3 d-flex justify-content-center">
            <div class="card col-3 m-2 px-0">
                <div class="card-header bg-primary text-light fs-4">
                    ${manager.getName()}
                    <br>
                    <i class="fa fa-coffee" aria-hidden="true"></i> ${manager.getRole()}
                </div>
                <div class="card-body bg-light fs-6">
                    <div class="bg-white mx-2 my-1 px-3 py-2">
                        ID: ${manager.getId()}
                    </div>
                    <div class="bg-white mx-2 my-1 px-3 py-2">
                        Email: <a href = "mailto: ${manager.getEmail()}">${manager.getEmail()}</a>
                    </div>
                    <div class="bg-white mx-2 my-1 px-3 py-2">
                        Office Number: ${manager.officeNum}
                    </div>
                </div>
            </div>
            ${generateEngineers(engineers)}
            ${generateInterns(interns)}
        </main>
    </body>
    </html>
    `;
};

const generateEngineers = engineers => {
    if (engineers) {
        return `
        ${engineers.map(({ name, id, email, gitHub }) => {
            return `
            <div class="card col-3 m-2 px-0">
                <div class="card-header bg-primary text-light fs-4">
                    ${name}
                    <br>
                    <i class="fas fa-glasses"></i> Engineer
                </div>
                <div class="card-body bg-light fs-6">
                    <div class="bg-white mx-2 my-1 px-3 py-2">
                        ID: ${id}
                    </div>
                    <div class="bg-white mx-2 my-1 px-3 py-2">
                        Email: <a href = "mailto: ${email}">${email}</a>
                    </div>
                    <div class="bg-white mx-2 my-1 px-3 py-2">
                        GitHub: <a href = "https://github.com/${gitHub}" target = "_blank">${gitHub}</a>
                    </div>
                </div>
            </div>
            `;
        }).join('')}
        `;
    } else {
        return ``;
    }
};

const generateInterns = interns => {
    if (interns) {
        return `
        ${interns.map(({ name, id, email, school }) => {
            return `
            <div class="card col-3 m-2 px-0">
                <div class="card-header bg-primary text-light fs-4">
                    ${name}
                    <br>
                    <i class="fas fa-user-graduate"></i> Intern
                </div>
                <div class="card-body bg-light fs-6">
                    <div class="bg-white mx-2 my-1 px-3 py-2">
                        ID: ${id}
                    </div>
                    <div class="bg-white mx-2 my-1 px-3 py-2">
                        Email: <a href = "mailto: ${email}">${email}</a>
                    </div>
                    <div class="bg-white mx-2 my-1 px-3 py-2">
                        School: ${school}
                    </div>
                </div>
            </div>
            `;
        }).join('')}
        `;
    } else {
        return ``;
    }
};

module.exports = generatePage;