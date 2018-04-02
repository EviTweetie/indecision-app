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
    {app.options && app.options.length > 0 ? (
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

let count = 0;
const addOne = () => {
  count++;
  renderCounterApp()
  //console.log("addOne", count);
};
const minusOne = () => {
  count--;
  renderCounterApp()
  //console.log("minusOne", count);
};
const reset = () => {
  count = 0;
  renderCounterApp()
  //console.log("reset", count);
};

const appRoot = document.getElementById("app");

/* 
count will never be shown in new calculated value, because templateTwo is only rendered once in the beginning
>> new function to re-render the div
*/

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();