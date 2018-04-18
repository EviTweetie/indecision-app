class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision";
    const subTitle = "Put your life in the hands of a computer";
    const options = ["Thing one", "Thing two", "Thing four"];

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
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <h3>Options Component here</h3>
        <p>
          Options-Length (number or items in array) ={" "}
          {this.props.options.length}
        </p>
        <h4>Map array items to Option components</h4>
        {this.props.options.map(option => <Option key={option} optionText={option} />)}
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <div>{this.props.optionText}</div>;
  }
}

class AddOption extends React.Component {
  render() {
    return <div>AddOption Component here</div>;
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
