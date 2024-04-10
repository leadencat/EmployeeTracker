const employee = require('../lib/employee');
const engineer = require('../lib/engineer');
const intern = require ('../lib/intern');
const manager = require ('../lib/manager');
const card = [];

function createCard(team) {
    for(i = 0; i < team.length; i++) {
        if (team[i].userRole() === 'Intern') {
            let cards = createIntern(team[i]);
            card.unshift(cards);
        }
    };

    for(i = 0; i < team.length; i++) {
        if (team[i].userRole() === 'Engineer') {
            let cards = createEngineer(team[i]);
            card.unshift(cards);
        }
    };

    for(i = 0; i < team.length; i++) {
        if (team[i].userRole() === 'Manager') {
            let cards = createManager(team[i]);
            card.unshift(cards);
        }
    }

    const showPage = displayPage(card);
    return showPage;
};

function createIntern(employee) {
    return `<div class="card" style="width: 16rem; border-radius: 0;">
    <section style="background-color: red; color: white; padding: 5px 8px; margin: 0; height: 75px;">
        <p style="margin: 2px 5px;">${employee.name}</p>
        <p style="margin: 0 0 5px;"><i class="bi bi-mortarboard-fill"></i>${employee.userRole()}<p>
    </section>
    <div class="card-body bg-light" style="padding: 30px 15px;">
        <div class="d-block" style="margin: 0;">
            <p style="height: 55px; background-color: white; border:solid 1px red; margin: 1px; padding: 10px 5px;">
                ID: ${employee.id}</p>
            <p style="height: 55px; background-color: white; border:solid 1px red; margin: 1px; padding: 10px 5px;">
                Email: ${employee.email}</p>
            <p style="height: 55px; background-color: white; border:solid 1px red; margin: 1px; padding: 10px 5px;">
                School: ${employee.school}</p>
        </div>
    </div>
</div>
`
}; 

function createEngineer(employee) {
    return `<div class="card" style="width: 16rem; border-radius: 0;">
    <section style="background-color: red; color: white; padding: 5px 8px; margin: 0; height: 75px;">
        <p style="margin: 2px 5px;">${employee.name}</p>
        <p style="margin: 0 0 5px;"><i class="bi bi-eyeglasses"></i>${employee.userRole()}<p>
    </section>
    <div class="card-body bg-light" style="padding: 30px 15px;">
        <div class="d-block" style="margin: 0;">
            <p style="height: 55px; background-color: white; border:solid 1px red; margin: 1px; padding: 10px 5px;">
                ID: ${employee.id}</p>
            <p style="height: 55px; background-color: white; border:solid 1px red; margin: 1px; padding: 10px 5px;">
                Email: ${employee.email}</p>
            <p style="height: 55px; background-color: white; border:solid 1px red; margin: 1px; padding: 10px 5px;">
                GitHub: ${employee.userGithub()}</p>
        </div>
    </div>
</div>
`
}; 

function createManager(employee) {
    return `<div class="card" style="width: 16rem; border-radius: 0;">
    <section style="background-color: red; color: white; padding: 5px 8px; margin: 0; height: 75px;">
        <p style="margin: 2px 5px;">${employee.name}</p>
        <p style="margin: 0 0 5px;"><i class="bi bi-cup-hot-fill"></i>${employee.userRole()}<p>
    </section>
    <div class="card-body bg-light" style="padding: 30px 15px;">
        <div class="d-block" style="margin: 0;">
            <p style="height: 55px; background-color: white; border:solid 1px red; margin: 1px; padding: 10px 5px;">
                ID: ${employee.id}</p>
            <p style="height: 55px; background-color: white; border:solid 1px red; margin: 1px; padding: 10px 5px;">
                Email: ${employee.email}</p>
            <p style="height: 55px; background-color: white; border:solid 1px red; margin: 1px; padding: 10px 5px;">
                Office Number: ${employee.ofcNum}</p>
        </div>
    </div>
</div>
`
}; 

function displayPage (card) {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
            integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"
        <link rel="stylesheet" href="./style.css">
    </head>
    
    <body>
        <div class="text-white text-center" style="height: 80px; background-color: red;">
            <h1 class="text-center" style="padding: 10px;">Team Profile</h1>
        </div>
        <main class="d-flex" style="justify-content: center; flex-wrap: wrap; margin: 40px auto; gap: 5px; width: 55%;">
        ${card.join('')}
        </main>
    </body>
    
    </html>`
};

module.exports = createCard;