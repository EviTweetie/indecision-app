import React from 'react'

export default class AddOption extends React.Component {
    state = {
            error: undefined
        }

    handleAddOption = (e) => {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({ error }));

        if (!error) {
            e.target.elements.option.value = "";
        }
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
        )
    }
}