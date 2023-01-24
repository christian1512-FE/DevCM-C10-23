
function createmanagercard(manager) {
    return `

<div class="card-area">
    <div class="container">
        <div class="row">
        
    <div class="col-md-4">
    <div class="card">
        <div class="card-body ">
            <h2>${manager.name}</h2>
            <h3>Manager</h3>
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                <li class="list-group-item">Office Number: ${manager.officenumber}</li>
            </ul>
        </div>
    </div>
</div>
    `
}

function createengineercard(engineer) {
    return `
    <div class="col-md-4">
    <div class="card">
        <div class="card-body ">
            <h2>${engineer.name}</h2>
            <h3>Engineer</h3>
            <ul class="list-group">
                <li class="list-group-item">ID:${engineer.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.gitprofile}">${engineer.gitprofile}</a>
            </ul>
        </div>
    </div>
</div>
    `
}

function createinterncard(intern) {
    return `
    <div class="col-md-4">
    <div class="card">
        <div class="card-body ">
            <h2>${intern.name}</h2>
            <h3>Intern</h3>
            <ul class="list-group">
                <li class="list-group-item">ID:${intern.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>
    </div>
</div>
    `

}

function compilecards(team) {
    // console.log(team)
    var cardarray = [];
    cardarray.push(team.filter(employee => employee.getRole() === "Manager").map(manager => createmanagercard(manager)).join(""))
    cardarray.push(team.filter(employee => employee.getRole() === "Engineer").map(engineer => createengineercard(engineer)).join(""))
    cardarray.push(team.filter(employee => employee.getRole() === "Intern").map(intern => createinterncard(intern)).join(""))
    return cardarray.join("")
}

module.exports = function (team) {


    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />


        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet">
        

    <link rel="stylesheet" href="./style.css">
    <title>My Team</title>
</head>
<header class="top-header">
    <h1>My Team</h1>
</header>


<body>
<main>
${compilecards(team)}
</main>

</body>

</html>
    
    `
}

