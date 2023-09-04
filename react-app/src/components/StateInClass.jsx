import React, { Component } from "react";

export default class StateInClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:'1',
            name: "Kittipong",
            counter: 0
        }
    }
    
        ClickPlus = () => {
            this.setState({
                counter: this.state.counter + 1,
            });
        };
        
        ClickMinus = () => {
            this.setState({
                counter: this.state.counter - 1
            });
        };

    render() {
        return (
            <div>
                <h2>{this.state.name}</h2>
                {this.state.counter}
                <br/>
                <button onClick={ this.ClickPlus }>+</button>
                <button onClick={ this.ClickMinus }>-</button>
            </div>
        )
    }
}
