import React, {Component} from 'react';
import {resultsArray} from './constants/results.constant';
import Field from './components/field.component';
import './App.css';
import Square from "./components/square.component";

class App extends Component {

    constructor() {
        super();
    }

    state = {
        isPlayerOne: false,
        isWon: false,
        player1Fields: [],
        player2Fields: [],
        fields: this.onPrepareFields()
    };

    onPrepareFields() {
        let fields = [];
        for (let i = 0; i < 9; i++) {
            fields.push({
                isClicked: false,
                isPlayer1Owned: false
            })
        }
        return fields;
    }

    clickHandler = (event) => {
        console.log('whatever ' + event);
    };

    render() {
        return (
            <div className="fieldsWrapper">
                {
                    this.state.fields.map((field, index) => {
                        return (
                            <Field key={index} id={index} isClicked={field.isClicked}
                                   isPlayer1Owned={field.isPlayer1Owned} clickHandler={() => this.clickHandler()}/>
                        );
                    })
                }
                {
                    this.state.fields.map((field, index) => {
                        return (
                            <Square key={index} id={index} isClicked={field.isClicked}
                                    isPlayer1Owned={field.isPlayer1Owned} clickHandler={this.clickHandler.bind(this)}/>
                        );
                    })
                }
            </div>
        )
    }
}

export default App;
