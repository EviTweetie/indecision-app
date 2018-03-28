console.log("App.js is running!");
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

/*Challenge: 
    Only render subtitle if subtitle exists (with p tags) == Logical AND
    render new p tag - if options.length > 0 "Here are your options" / "No options"
*/

var app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer.",
  options: ["One", "Two"]
};

console.log(app);

var template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    {(app.options) && app.options.length > 0 ? (
      <div>
        <p>Here are your options:</p>
        <ol>
          <li>Item {app.options[0]}</li>
          <li>Item {app.options[1]}</li>
        </ol>
      </div>
    ) : (
      <p>No options available!</p>
    )}
  </div>
);

//if statement with user
var user = {
  name: "Peter",
  age: 11,
  location: "Danmark"
};

//function to get user.location
function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}

var templateUser = (
  <div>
    <h2>User Info</h2>
    <h3>{user.name ? "User-Name: " + user.name : "no name defined"}</h3>
    {user.age && user.age >= 18 && <p>{user.age}</p>}
    {/* because logical AND does only return the second value: <p>{user.age}</p> */}
    {getLocation(user.location)}
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
