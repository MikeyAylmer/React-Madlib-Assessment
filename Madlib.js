import React, { Component } from 'react';

class MadlibsGame extends Component {
    constructor(props) {
        super(props);

        this.state = {
            noun1: '',
            noun2: '',
            adjective: '',
            color: '',
            madlib: '',
        };
    }

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    generateMadlib = () => {
        const { noun1, noun2, adjective, color } = this.state;
        const madlib = `The ${adjective} ${noun1} and ${color} ${noun2} went for a walk in the park.`;
        this.setState({ madlib });
    }

    restartGame = () => {
        this.setState({
            noun1: '',
            noun2: '',
            adjective: '',
            color: '',
            madlib: '',
        });
    }

    render() {
        return (
            <div className="madlibs-game">
                <h1>Madlibs Game</h1>
                <form>
                    <label>
                        Noun 1:
                        <input type="text" name="noun1" value={this.state.noun1} onChange={this.handleInputChange} />
                    </label>
                    <br />
                    <label>
                        Noun 2:
                        <input type="text" name="noun2" value={this.state.noun2} onChange={this.handleInputChange} />
                    </label>
                    <br />
                    <label>
                        Adjective:
                        <input type="text" name="adjective" value={this.state.adjective} onChange={this.handleInputChange} />
                    </label>
                    <br />
                    <label>
                        Color:
                        <input type="text" name="color" value={this.state.color} onChange={this.handleInputChange} />
                    </label>
                </form>
                <button onClick={this.generateMadlib}>Create Madlib</button>
                {this.state.madlib && (
                    <div>
                        <h2>Madlib:</h2>
                        <p>{this.state.madlib}</p>
                        <button onClick={this.restartGame}>Restart</button>
                    </div>
                )}
            </div>
        );
    }
}

export default MadlibsGame;
