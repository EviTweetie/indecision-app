console.log("App.js is running!")
/* 
Commit: 
Abschnitt 3 Lektion 12
*/

// content
/* 
    if statements
    ternary operator
    logical AND operator
*/

// JSX - JavaScript XML

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer.'
}
console.log(app)

var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
)

//if statement with user
var user = {
    name: 'Peter',
    age: 24,
    location: 'Danmark'
}

//function to get user.location
function getLocation(location) {
    if (location) {
        return {location}
    } else {
        return 'no location defined'
    }
}

var templateUser = (
    <div>
        <h1>User Info</h1>
        <h2>{user.name}</h2>
        <p>{user.age}</p>
        <p>{getLocation(user.location)}</p>
    </div>
)

var appRoot = document.getElementById("app")

ReactDOM.render(templateUser, appRoot)