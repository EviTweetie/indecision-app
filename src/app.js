console.log("App.js is running!")

// JSX - JavaScript XML

var templateOriginal = (
  <div>
    <h1>Indecision App</h1>
    <p>This is some info</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
)

var app = {
    title: 'Indecision App',
    subtitle: 'This is some info!'
}
console.log(app)

var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
    </div>
)

//User via variables
var userName = 'Hans'
var userAge = 45
var userLocation = 'Hamburg'

//user object
var user = {
    name : 'Mona Lisa',
    age : 35,
    location : 'Bremen'
}
console.log(user)

var templateTwo = (
    <div>
        <h1>Evi Tweetie</h1>
        <p>My age: 48</p>
        <p>Location: Hamburg</p>
        
        <h2>User via variables</h2>
        <p>Name: {userName}</p>
        <p>Age: {userAge}</p>
        <p>Location: {userLocation}</p>

        <h2>User via Object</h2>
        <p>Name: {user.name}</p>
        <p>Name: {user.age}</p>
        <p>Name: {user.location}</p>
    </div>
)

var appRoot = document.getElementById("app")

ReactDOM.render(template, appRoot);
//ReactDOM.render(templateTwo, appRoot)