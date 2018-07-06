import React from "react";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import AddOption from "./AddOption";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {
  state = { options: this.props.options, selectedOption: undefined };
  //Class Methods
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };
  handleClearSelectedOption = () => {
    this.setState(() => ({
      selectedOption: undefined
    }));
  };
  handleDeleteOption = optionToRemove => {
    console.log(`remove individual option: ${optionToRemove}`);
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }));
  };
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({
      selectedOption: option
    }));
    //alert(randomNum + ' option: ' + option)
  };
  handleAddOption = option => {
    if (!option) {
      return "Enter a valid option!";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists!";
    } else {
      this.setState(prevState => ({
        options: prevState.options.concat(option)
      }));
    }
  };
  //LifeCycle Methods
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      console.log(json);
      const options = JSON.parse(json);
      console.log(options);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      //do nothing
      console.log(e);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      console.log(json);
      localStorage.setItem("options", json);
    }
  }
  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    const subTitle = "Put your life in the hands of a computer";

    return (
      <div>
        <Header subTitle={subTitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};
