class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: props.options
    };
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this)
  }
  //LifeCycle Methods
  componentDidMount () {
    console.log('component did mount')
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('component did update')
    console.log('prevProps', prevProps)
    console.log('props', this.props)
    console.log('prevState', prevState)
    console.log('state', this.state)
  }
  componentWillUnmount () {
    console.log('component will unmount')
    //could be used in option when removed
  }
  
  
  //Class Methods
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }))
  }
  handleDeleteOption(optionToRemove) {
    console.log(`remove individual option: ${optionToRemove}`)
    this.setState((prevState) => ({
      options: prevState.options.filter( (option) => optionToRemove !== option )
    }))
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
      this.setState(prevState => ({ options: prevState.options.concat(option) })) 
    }
  }
  render() {
    //const title = "Indecision";
    const subTitle = "Put your life in the hands of a computer";

    return (
      <div>
        {/*<Header title={title} subTitle={subTitle} />*/}
        <Header subTitle={subTitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: ['Hello I am the DEFAULT PROP :)']
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subTitle && <h2>{props.subTitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: 'Indecision'
}

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
          <Option 
            key={option} 
            optionText={option} 
            handleDeleteOption={props.handleDeleteOption}
            />
        ))}
        <br />
      </div>
    );
  }


const Option = (props) => {
  return (
    <div>
    {props.optionText}
    <button 
        onClick={(e) => props.handleDeleteOption(props.optionText)}
    >
      Remove
    </button>
  </div>
  )
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
    this.setState(() => ({ error }))
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

ReactDOM.render(<IndecisionApp options={['Option One', 'Option Two', 'Option Three']} />, document.getElementById("app"));
//ReactDOM.render(<IndecisionApp />, document.getElementById("app"))