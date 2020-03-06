// box for user to type in their answer

import React, { Component } from 'react';

class UserAnswer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            answer: '',
            correct: false, 

        };

    }


    handleChange = (event) => {
        this.setState({ answer: event.target.value }, () => { console.log(this.state.answer) })

    }


    render() {

        return (

            <form>
                <label htmlFor="answer">answer</label>
                <input
                    type="text"
                    name="answer"
                    value={this.state.answer}
                    onChange={this.handleChange}

                />
            </form>



        );
    }



}

export default UserAnswer;