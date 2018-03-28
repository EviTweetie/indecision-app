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
    age: 31,
    location: 'Danmark'
}

//function to get user.location
function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>
    }
}

var templateUser = (
    <div>
        <h2>User Info</h2>
        <h3>{user.name ? 'User-Name: ' + user.name : 'no name defined'}</h3>
        {user.age >= 18 && <p>{user.age}</p>}
        {/* because logical AND does only return the second value: <p>{user.age}</p> */}
        {getLocation(user.location)}
    </div>
)

var appRoot = document.getElementById("app")

ReactDOM.render(templateUser, appRoot)