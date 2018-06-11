class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    };
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
  }
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(randomNum + " option: " + option);
  }
  handleAddOption(option) {
    if (!option) {
      return "Enter a valid option!";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists!";
    } else {
      this.setState(prevState => {
        return { options: prevState.options.concat(option) };
      });
    }
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
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subTitle}</h2>
    </div>
  );
};

const Action = (props) => {
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.handlePick}>
        What should I do?
      </button>
    </div>
  );
};

const Options = (props) => {
    return (
      <div>
        <button onClick={props.handleDeleteOptions}>
          Remove all options
        </button>
        <h3>Options Component here</h3>
        <p>Number of options: {props.options.length}</p>
        {props.options.map(option => (
          <Option key={option} optionText={option} />
        ))}
        <br />
      </div>
    );
  }


const Option = (props) => {
  return <p>{props.optionText}</p>
}


class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: undefined
    };
    this.handleAddOption = this.handleAddOption.bind(this);
  }

  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(() => {
      return { error };
    });
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form id="addOptionForm" onSubmit={this.handleAddOption}>
          <input type="text" name="option" placeholder="put in an option" />
          <button type="submit" name="submitButton">
            Add Option
          </button>
        </form>
      </div>
    );
  }
}

//stateless functional components - presentational components
// const User = (props) => {
//   return <div>Name: {props.name}</div>
// }

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
//ReactDOM.render(<User name="Evi" />, document.getElementById('app'));
