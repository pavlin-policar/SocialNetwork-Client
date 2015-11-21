import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';

const ENTER_KEY_CODE = 13;

class AutoTextarea extends React.Component {

  displayName = 'AutoTextarea';

  static propTypes = {
    validation: React.PropTypes.func,
    handleSubmit: React.PropTypes.func
  };

  constructor(props) {
    super(props);

    this._handleKeyDown = this._handleKeyDown.bind(this);
  }

  render() {
    return (
        <TextareaAutosize
            minRows={1}
            onKeyDown={this._handleKeyDown}
            placeholder={this.props.placeholder}>
          {this.props.children}
        </TextareaAutosize>
    );
  }

  _handleKeyDown(e) {
    // Pressing enter will submit the comment, pressing enter with shift will
    // insert a new space
    if (e.keyCode === ENTER_KEY_CODE && !e.shiftKey) {
      e.preventDefault();
      if (this.props.validation && this.props.validation(e.target.value) ||
          true) {
        // todo create appropriate comment object
        this.props.handleSubmit && this.props.handleSubmit(e.target.value);
      }
    }
  }
}

export default AutoTextarea;