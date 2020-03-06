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
            redirect: false,
        }

        this.generateEquation.bind(this);
        this.addCorrect.bind(this);
        this.redirectEnd.bind(this);
    }

    // keep track of number correct 
    addCorrect = () => {
        this.setState({numCorrect: this.state.numCorrect + 1}, () => console.log("num correct: " + this.state.numCorrect))

    }

    // generate random equations based on operations passed through
    generateEquation = () => {

        // array of all the potential equations -> pick one randomly 
        
        // keep track of number of times generate equation

        var operationArr = this.props.location.state.equations;
        var randomOperation = operationArr[Math.floor(Math.random() * operationArr.length)];

        console.log("called generate equation");
        console.log({randomOperation});
        // console.log(this.props.location.state.equations);


        return(<Equation operation={randomOperation} numCorrect={this.addCorrect}></Equation>)



    };

    // redirect to end page 
    redirectEnd = () => {
        console.log("finished");
        
        this.props.history.push({
            pathname: `\endpage`,
            state: {
                numCorrect: this.state.numCorrect,

            }
        });

    }


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

                {/* {this.state.redirect
                    ? <Redirect to="/endpage"></Redirect>
                    : <h1>Remaining Time: {this.state.seconds}</h1>
                } */}


                {/* <Timer time={this.props.location.state.time} redirect={this.redirectEnd}></Timer> */}

                <Timer time={this.props.location.state.time} redirect={this.redirectEnd}></Timer>



        

            </div>




        );
    };




};


export default EquationPage;