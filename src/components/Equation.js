
import React, { Component } from 'react';


const operationDictionary = {
    'Addition': '+',
    'Subtraction': '-',
    'Multiplication': 'x',
    'Division': '÷',

}


class Equation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            answer: '',
            firstNum: '',
            secondNum: '',
            operation: 'Addition',
            userAnswer: '',
            display: true,
            numCorrect: 0,
        }

        this.randomNumber.bind(this);
        this.generateEquation.bind(this);
        this.onDisplay.bind(this);
        this.handleChange.bind(this);

    }

    // generates random number given: minimum, maximum, and up to a number of decimal places
    randomNumber = (min, max, decimalPlaces) => {

        /* distance between min & max -> if min = 2 and max = 5, distance b/w both is 4
        Math.random() is number between 0 and 1 -> after multiplying, get num from 0 up to 4 
        floor function drops decimal part -> get num b/w 0 and 3 
        adding min -> makes sure you're in the range 
        tldr; multiply by size of range to scale random number, add minimum value to "shift"
        */

        var rand = Math.random() * (max - min + 1) + min;

        // generate random number of decimal places 
        var randDecimalPlaces = Math.floor(Math.random() * (decimalPlaces + 1));

        var power = Math.pow(10, randDecimalPlaces);
        return Math.floor(rand * power) / power;


    };


    generateEquation = (min1, max1, decimalPlaces1, min2, max2, decimalPlaces2, operation) => {
        const firstNum = this.randomNumber(min1, max1, decimalPlaces1);
        const secondNum = this.randomNumber(min2, max2, decimalPlaces2);
        let ans = 0;

        // debug this -> doesn't truncate firstNum and secondNum completely 

        // depending on operation -> calculate answer 
        switch (operation) {
            case 'Addition':
                ans = firstNum + secondNum;
                break;

            case 'Subtraction':
                ans = firstNum - secondNum;
                break;

            case 'Multiplication':
                ans = firstNum * secondNum;
                break;

            case 'Division':
                ans = firstNum / secondNum;
                break;

        }

        this.setState({
            answer: ans,
            firstNum,
            secondNum
        });


    };

    // display equation 
    onDisplay = () => {
        if (this.state.display) {
            this.generateEquation(1, 5, 0, 1, 100, 0, this.props.randomOperation);

        }


    };

    // after all elements of page are rendered correctly -> this is called
    // if you need to load data -> do it here 
    componentDidMount() {
        this.onDisplay();
    }


    // when user inputs answer -> automatically updates & checks if correct 
    handleChange = (event) => {
        this.setState({ userAnswer: event.target.value }, () => { 
            // console.log(this.state.answer.type);
            // console.log(this.state.userAnswer.type);

            // check if correct 
            if(this.state.userAnswer == this.state.answer){
                // console.log("correct");

                // increase number correct 
                this.props.numCorrect();

                // increase number correct & clear user answer
                this.setState({numCorrect: this.state.numCorrect + 1, userAnswer: ''})

                // generate next equation 
                this.generateEquation(1,10,0,1,10,0,"Addition");


                
            }
        
        })

    }



    render() {


        return (

        

            <div className="equation">

            <div className="numCorrect">
                {this.state.numCorrect}
            </div>

            <h1>

            

                {this.state.firstNum}
                {operationDictionary[this.state.operation]}
                {this.state.secondNum} {"="}
                {this.state.answer}

                </h1>

                <div className="userInput">

                    <form>
                        <label htmlFor="answer">answer</label>
                        <input
                            type="text"
                            name="answer"
                            value={this.state.userAnswer}
                            onChange={this.handleChange}

                        />
                    </form>

                </div>


            </div>


        );






    };



}

export default Equation;