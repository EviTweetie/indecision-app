class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOne = this.handleAddOne.bind(this)
    this.handleMinusOne = this.handleMinusOne.bind(this)
    this.handleReset = this.handleReset.bind(this)

    this.state = {
      count: 0
    }
  }

  componentDidMount () {
    try {
      const stringCount = localStorage.getItem("count")
      const count = parseInt(stringCount, 10);
      if (!NaN(count)) {
        this.setState(() => ({count}))
      }
    } catch (error) {
    }
  }
  
  componentDidUpdate (prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem('count', this.state.count)
    }
  }
  

  handleAddOne() {
    console.log("handleAddOne")
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }

  handleMinusOne() {
    console.log("handleMinusOne")
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      }
    })
  }

  handleReset() {
    console.log("handleReset")
    this.setState(() => ({ count: this.props.count }))
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
    )
  }
}

ReactDOM.render(<Counter count={0}/>, document.getElementById("app"))
