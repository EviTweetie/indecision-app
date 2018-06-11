class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.state = {
      count: 0,
      //adding more state children
      name: "Counter Example"
    };
  }

  handleAddOne() {
    console.log("handleAddOne");
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
    console.log(this.state);
  }

  handleMinusOne() {
    console.log("handleMinusOne");
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      };
    });
    console.log(this.state);
  }

  handleReset() {
    console.log("handleReset");
    this.setState(() => {
      return { count: 0 };
    });
    //with just count: this.setState.count + 1 we won't get the correct value >> async calls of setState
    /*
    this.setState(() => {
      return { count: this.state.count + 1 };
    });
    */
    //next function call with correct output, due to prevState is used
    //always better pass a function when using setState
    /*
    this.setState((prevState) => {
      console.log(prevState)
      return { count: prevState.count + 1 };
    });
    */
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <h5>{this.state.name}</h5>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("app"));
