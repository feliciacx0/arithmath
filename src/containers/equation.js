// container page for displaying equations
// keep track of: number correct, missed equations, timer
// display equations within time limit & parameters 

import React, {Component} from 'react';


class Equation extends Component{

    constructor(props){
        super(props);
        this.state = {
            numCorrect: 0,
            missedQuestions: [], 
        }
    }


    render() {

        return(

            <div>

            {this.props.location.state.time}
            {this.props.location.state.equations}


            <h1>This is an equation here</h1>

            </div>




        );
    };




};


export default Equation;