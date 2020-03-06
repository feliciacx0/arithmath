import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';



class Timer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
            redirect: false
        }

        
    }

   

    componentDidMount() {

       this.setState({seconds: this.props.time})

        // myInterval is a variable -> equal to the return of the setInterval function
        // setInterval -> decrements by milliseconds 
        this.myInterval = setInterval(() => {
            
            const { seconds } = this.state;

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }

            if (seconds === 0) {
                 
                clearInterval(this.myInterval);
                this.props.redirect();
              

                
            }



        }, 1000)
    }

    // when done -> redirect 
    componentWillUnmount() {
        clearInterval(this.myInterval);

    }




    render() {
        
        return (
            <div>

            <h1>Remaining Time: {this.state.seconds}</h1>


               {/* {this.state.redirect
                    ? <Redirect to="/endpage"></Redirect>
                    : <h1>Remaining Time: {this.state.seconds}</h1>
                } */}


            </div>
        )
    };


}

export default Timer;