import React, { Component } from 'react';


class Timer extends Component {

    constructor(props) {
        super(props);
        this.state = { date: new Date() };

    }

    // componentDidMount() {
    //     this.timerID = setInterval(() => this.tick(), 1000
    //     );
    // }

    // componentWillUnmount() {
    //     clearInterval(this.timerID);
    // }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h2> It is {this.props.date.toLocaleTimeString()}</h2>
            </div>
        )
    };


}

export default Timer;