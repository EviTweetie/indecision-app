const app = {
  title: "Visibility Toggle",
  btnText: "Show details",
  message: "Here come the details",
  toggle: false
};

const appRoot = document.getElementById("app");

let visible = app.toggle;

const toggleVisibility = () => {
  console.log("toggle start :" + visible);
  visible = !visible;
  console.log("toggle end: " + visible);
  render();
};

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={toggleVisibility}>
        {visible ? "Hide details" : "Show details"}
      </button>
      {/* 
        OK like this
        <p>{toggleShow ? app.message : ''}</p> 
        better do like this
    */}
    {visible && (
        <div>
            <p>Here are some details visible :)</p>
        </div>
    )}
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();
