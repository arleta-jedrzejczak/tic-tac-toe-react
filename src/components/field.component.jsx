import React, { Component } from 'react';

class Field extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id: props.id,
        isClicked: props.isClicked,
        isPlayer1Owned: props.isPlayer1Owned
    };
    this.onFieldClick = this.onFieldClick.bind(this);
  }

  onFieldClick(event) {
      console.log(event);
      this.setState({
        [event.target.id]: event.target.value
      });
  }

  render() {
      return(
          <div className="field" onClick={this.onFieldClick}>
              {this.state.isClicked &&
                  <h2>{this.state.isPlayer1Owned ? 'o' : 'x'}</h2>
              }
          </div>
      )
  }
}

export default Field;
