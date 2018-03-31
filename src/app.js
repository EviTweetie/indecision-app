console.log("App.js is running!");

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

let counter = 0
const addOne = () => console.log('addOne')
const minusOne = () => console.log('minusOne')
const reset = () => console.log('reset')
const templateTwo = (
  <div>
    <h1>Counter: {counter}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>Reset</button>
  </div>
)

const appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);