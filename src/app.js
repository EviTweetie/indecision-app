class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision";
    const subTitle = "Put your life in the hands of a computer";
    const options = ["Thing one", "Thing two", "Thing four","new one"];

    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subTitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    alert("handle pick");
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  //create method to remove all options
  handleRemoveAll() {
    alert("handle remove all fired");
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove all options</button>
        <h3>Options Component here</h3>
        <p>
          Options-Length (number or items in array) ={" "}
          {this.props.options.length}
        </p>
        <h4>Map array items to Option components</h4>
        {this.props.options.map( (option) => (
          <Option key={option.index} optionText={option} />
        ))}
        <br />
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <p>{this.props.optionText}</p>;
  }
}

class AddOption extends React.Component {
  handleAddOption (e) {
    e.preventDefault()
    const option = e.target.elements.option.value.trim()
    if (option) {
      alert(option)
    }
  }
  render() {
    return (
      <form id="addOptionForm" onSubmit={this.handleAddOption}>
        <input type="text" name="option" placeholder="put in an option" />
        <button type="submit" name="submitButton">
          Add Option
        </button>
      </form>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"))
