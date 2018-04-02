console.log("App.js is running!");

const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer.",
  options: []
};

console.log(app);

const onFormSubmit = e => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    console.log(app.options.length);
    e.target.elements.option.value = "";
    render();
  }
};

const onRemoveAll = () => {
  app.options = [];
  render();
};

const appRoot = document.getElementById("app");

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <h3>
        {app.options && app.options.length > 0
          ? "Here are your options:"
          : "No options available!"}
      </h3>

      <h5>Number of options: </h5>
      <p>{app.options.length}</p>

      <ol>
      {app.options.map((optionValue) => <li key={optionValue}>{optionValue}</li> )}
      </ol>
      
      <button onClick={onRemoveAll}>Remove all</button>

      <form onSubmit={onFormSubmit}>
        <input type="input" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();
