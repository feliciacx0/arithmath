import React, { Component } from 'react';
import SettingsTable from '../components/SettingsTable';
import DropdownText from '../components/Dropdown';
import { Button } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';



var timeOptions = [
    {
        key: '5',
        text: "5 seconds",
        value: '5'
    },
    {
        key: '30',
        text: "30 seconds",
        value: '30'
    },
    {
        key: '60',
        text: "60 seconds",
        value: '60'
    },

    {
        key: '120',
        value: '120'
    },
    {
        key: '300',
        value: '300'
    },
]



class Frontpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typeOfEquation: {},
            time: 0,
            startGame: false,

        }
        this.handleTime = this.handleTime.bind(this);
        this.addOperation = this.addOperation.bind(this);
        this.startGame = this.startGame.bind(this);
        this.renderRedirect = this.renderRedirect.bind(this);
        this.rangeChange = this.rangeChange.bind(this);
    }


    handleTime = (timeValue) => {
        this.setState({ time: timeValue }, () => console.log(this.state.time));
    };


    // adding type of operation (addition, subtraction, etc.) 
    addOperation = (operation, clicked) => {

        // if newly clicked -> add to operation list; else, remove 
        // add range function 
        if (clicked) {
            // push an object into the array 
            this.state.typeOfEquation[operation] = {"num1": 2, "num2": 100, "num3": 2, "num4":100};
            // var obj = {}
            // obj[operation] = "";
            // this.state.typeOfEquation.push(obj);
            console.log(this.state.typeOfEquation);
            // this.setState({typeOfEquation: this.state.typeOfEquation.push(obj)}, () => console.log(this.state.typeOfEquation));
            



        } else {
            console.log("remove from list");

            // console.log(Object.keys(this.state.typeOfEquation));

            delete this.state.typeOfEquation[operation]
            console.log(this.state.typeOfEquation);
    
            // var filterArr = this.state.typeOfEquation.filter(e => e != operation["operation"]);
            // this.setState({ typeOfEquation: filterArr }, () => console.log(this.state.typeOfEquation));

        }

    };

    // adding ranges for each operation
    // name -> indicates which of the range boxes 
    // number -> the actual number to be updated 
    rangeChange = (operation, number, name) => {

        // if operation is clicked -> update range 
        if(this.state.typeOfEquation.hasOwnProperty(operation)){
            this.state.typeOfEquation[operation][name] = parseInt(number, 10); 
            console.log(this.state.typeOfEquation);

        }

     
    }




    // after finishing settings -> start game 
    startGame = () => {
        this.setState({ startGame: true });
    };

    // redirecting to start the game 
    renderRedirect = () => {
        if (this.state.startGame) {

            this.props.history.push({
                pathname: `\equation`,
                state: {
                    time: this.state.time,
                    equations: this.state.typeOfEquation,

                }
            });

            // return <Redirect to='/equation'  />



        }
    }


    render() {


        return (


            // choose type of equations
            <div>

                {this.renderRedirect()}

                <div>

                    <SettingsTable className="table" addOperation={this.addOperation} rangeChange={this.rangeChange}>Here</SettingsTable>


                    <DropdownText timeOptions={timeOptions} onSelectTime={this.handleTime}> </DropdownText>
                </div>

                <Button className="submit-button" onClick={this.startGame}>START NOW</Button>



            </div>




        );
    }
}

export default Frontpage;