console.log("App.js is running!");

const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer.",
  options: []
};

console.log(app);

let count = app.options.length

const onFormSubmit = (e) => {
  e.preventDefault()

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    count = app.options.length
    console.log(count);
    e.target.elements.option.value = "";
    render()
  } 
}

const appRoot = document.getElementById("app");

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <h2>
        {app.options && app.options.length > 0
          ? "Here are your options:"
          : "No options available!"}
      </h2>
  
      <h3>Number of options: </h3>
      <p>{count}</p>
      <ol>
        <li>Item {app.options[0]}</li>
        <li>Item {app.options[1]}</li>
      </ol>
  
      <form onSubmit={onFormSubmit}>
        <input type="input" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();
