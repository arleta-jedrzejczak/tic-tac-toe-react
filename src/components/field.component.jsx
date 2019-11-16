import React, { Component } from 'react';

class Field extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id: props.id,
        isClicked: props.isClicked,
        isPlayer1Owned: props.isPlayer1Owned
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

    clickHandler(event) {
      event.persist();
      console.log(event);
  };

  render() {
      return(
          <div className="field" onClick={this.props.clickHandler}>
              {this.state.isClicked &&
                  <h2>{this.state.isPlayer1Owned ? 'o' : 'x'}</h2>
              }
          </div>
      )
  }
}

export default Field;
