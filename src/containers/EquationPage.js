// container page for displaying equations
// keep track of: number correct, missed equations, timer
// display equations within time limit & parameters 

import React, { Component } from 'react';
import UserAnswer from '../components/UserAnswer';
import Timer from '../components/Timer';
import Equation from '../components/Equation';



class EquationPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numCorrect: 0,
            missedQuestions: [],
            addition: false, 
        }

        this.generateEquation.bind(this);
    }

    // generate random equations based on operations passed through
    generateEquation = () => {

        // array of all the potential equations -> pick one randomly 
        console.log(this.props.location.state.equations);

        var operationArr = this.props.location.state.equations;
        var randomOperation = operationArr[Math.floor(Math.random() * operationArr.length)];

        return(<Equation operation={randomOperation}></Equation>)



    };


    render() {

       

        return (

            <div>

                {/* {this.props.location.state && this.props.location.state.time} */}
                {/* {currentEquation} */}

                <div>

        

                    {/* <button onClick={() => this.generateEquation()}> clicky here</button> */}
                    {/* {this.state.addition && <AdditionEquation></AdditionEquation>} */}

                    {this.generateEquation()}

                    {/* <UserAnswer></UserAnswer> */}

                </div>



                <Timer></Timer>


        

            </div>




        );
    };




};


export default EquationPage;