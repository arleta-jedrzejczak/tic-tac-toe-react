import React, {Component} from 'react';
import {resultsArray} from './constants/results.constant';
import './App.css';
import Square from "./components/square.component";
import Button from "./components/button.component";
import Score from "./components/score.component";

class App extends Component {

    constructor() {
        super();
    }

    initialState = {
        isPlaying: false,
        isPlayerOne: false,
        isWon: false,
        isDraw: false,
        player1Fields: [],
        player2Fields: [],
        fields: App.prepareFields()
    };

    state = {
        ...this.initialState
    };

    static prepareFields() {
        let fields = [];
        for (let i = 0; i < 9; i++) {
            fields.push({
                isClicked: false,
                isPlayer1Owned: false
            })
        }
        return fields;
    }

    componentDidUpdate() {
        // wired conditions: componentDidUpdate is fired after changeTurn
        if (this.state.isPlayerOne && this.state.player2Fields.length >= 3) {
            this.checkFields(false);
        } else if (!this.state.isPlayerOne && this.state.player1Fields.length >= 3) {
            this.checkFields(true);
        }
    }

    checkFields(isPlayerOneResults) {
        const isNotUnclickedField = !this.state.fields.find((element) => element.isClicked === false);
        let playerResultsArray = isPlayerOneResults ? this.state.player1Fields : this.state.player2Fields;
        for (let i = 0; i < resultsArray.length; i++) {
            let a = resultsArray[i][0];
            let b = resultsArray[i][1];
            let c = resultsArray[i][2];
            if (playerResultsArray.includes(a) && playerResultsArray.includes(b) && playerResultsArray.includes(c) && !this.state.isWon) {
                this.setState({
                    isWon: true,
                    isPlaying: false
                });
            }
        } if (isNotUnclickedField && !this.state.isDraw) {
            this.drawGame();
        }
    }

    drawGame() {
        this.setState({
            isDraw: true,
            isPlaying: false
        });
    }

    fieldClickHandler(field) {
        if (!this.state.fields[field].isClicked) {
            this.setState(state => {
                const fields = state.fields.map((item, index) => {
                    let itemField = {...item};
                    if (field === index) {
                        itemField.isClicked = true;
                        this.state.isPlayerOne ? (itemField.isPlayer1Owned = true) : (itemField.isPlayer1Owned = false);
                    }
                    return itemField;
                });
                return {
                    fields,
                };
            });
            this.updatePlayersArrays(field);
            this.changeTurn();
        }
    }

    updatePlayersArrays(field) {
        this.setState((state) => {
            let player1Fields, player2Fields;
            if (state.isPlayerOne) {
                player1Fields = [...state.player1Fields, field];
                player1Fields.sort((a, b) => a - b);
                return {player1Fields};
            } else {
                player2Fields = [...state.player2Fields, field];
                player2Fields.sort((a, b) => a - b);
                return {player2Fields};
            }
        });
    }

    changeTurn() {
        this.setState({
            isPlayerOne: !this.state.isPlayerOne
        })
    }

    buttonClickHandler() {
        this.state.isPlaying ? this.endGame() : this.startGame();
    }

    startGame() {
        this.setState(() => {
            const isPlaying = true;
            const isPlayerOne = true;
            return {
                ...this.initialState,
                isPlaying,
                isPlayerOne
            }
        });
    }

    endGame() {
        this.setState({
            ...this.initialState
        })
    }

    render() {
        return (
            <div>
                <Button clickHandler={this.buttonClickHandler.bind(this)} isPlaying={this.state.isPlaying}/>
                <div className="fieldsWrapper">
                    {
                        this.state.fields.map((field, index) => {
                            return (
                                <Square key={index} id={index} isClicked={field.isClicked}
                                        isPlayer1Owned={field.isPlayer1Owned} isPlaying={this.state.isPlaying}
                                        clickHandler={this.fieldClickHandler.bind(this, index)}/>
                            );
                        })
                    }
                </div>
                <Score isWon={this.state.isWon} isPlayerOne={!this.state.isPlayerOne} isDraw={this.state.isDraw}/>
            </div>
        )
    }
}

export default App;
