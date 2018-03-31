console.log("App.js is running!");
/* 
Commit: 
3.13 Arrow Functions
*/

/*Challenge: 
  Change current functions to arrow functions
*/

const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer.",
  options: ["One", "Two", "Three"]
};

console.log(app);

const template = (
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
const user = {
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



const templateUser = (
  <div>
    <h2>User Info</h2>
    <h3>{user.name ? "User-Name: " + user.name : "no name defined"}</h3>
    {user.age && user.age >= 18 && <p>{user.age}</p>}
    {getLocation(user.location)}
  </div>
);

const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);