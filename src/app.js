class IndecisionApp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      options: ["Thing one", "Thing two", "Thing four", "new one","else","komisch"]
    }
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
  }
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      }
    })
  }
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(randomNum + " option: " + option);
  }
  render() {
    const title = "Indecision";
    const subTitle = "Put your life in the hands of a computer";
    
    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <Action 
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options 
          options={this.state.options} 
          handleDeleteOptions={this.handleDeleteOptions}
        />
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
  render() {
    return (
      <div>
        <button 
          disabled={!this.props.hasOptions} 
          onClick={this.props.handlePick}>
            What should I do?
          </button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove all options</button>
        <h3>Options Component here</h3>
        <p>
          Options-Length (number or items in array) ={" "}
          {this.props.options.length}
        </p>
        <h4>Map array items to Option components</h4>
        {this.props.options.map( (option) => (
          <Option key={option} optionText={option} />
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
    //trim removes the spaces e.g. to suppress new option with spaces only
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
