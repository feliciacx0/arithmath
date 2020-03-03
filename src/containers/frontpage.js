import React, { Component } from 'react';
import SettingsTable from '../components/SettingsTable';
import DropdownText from '../components/Dropdown';
import {Button} from 'semantic-ui-react';
import {BrowserRouter as Redirect, Router, Route, Link, Switch, useHistory} from 'react-router-dom';



var timeOptions = [
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
]


var operations = [
    {
        key: 'Addition',
        value: '+'
    },
    {
        key: 'subtraction',
        value: '-'
    },
]


class Frontpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typeOfEquation: [],
            time: 0,
            startGame: false,
        }
        this.handleTime = this.handleTime.bind(this);
        this.addOperation = this.addOperation.bind(this);
        this.startGame = this.startGame.bind(this);
        this.renderRedirect = this.renderRedirect.bind(this);
    }


    handleTime = (timeValue) => {
        this.setState({ time: timeValue }, () => console.log(this.state.time));
    };


    // adding type of operation (addition, subtraction, etc.) 
    addOperation = (operation, clicked) => {  
    
        // if newly clicked -> add to operation list; else, remove 
        if(clicked){
            this.state.typeOfEquation.push(operation);
            console.log(this.state.typeOfEquation);
        } else{
            var filterArr = this.state.typeOfEquation.filter(e => e != operation);

            this.setState({typeOfEquation: filterArr}, () => console.log(this.state.typeOfEquation));

        }

    };

    // after finishing settings -> route to equation page & start game 
    startGame = () => {
       this.setState({startGame: true});
    };

    // redirecting to start the game 
    renderRedirect = () => {
        if(this.state.startGame){
            
            // WHY DOES THIS WORK BUT REDIRECT DOESNT 
            this.props.history.push({
                pathname: `\equation`,
                state:{
                    time: this.state.time,
                    equations: this.state.typeOfEquation,

                }
            });
            // return <Redirect to='/equation' />
        }
    }


    render() {


        return (
            

            // choose type of equations
            <div>
            
            {this.renderRedirect()}

                <div>

                    <SettingsTable className="table" addOperation={this.addOperation}>Here</SettingsTable>


                    <DropdownText timeOptions={timeOptions} onSelectTime={this.handleTime}> </DropdownText>
                </div>

                <Button className="submit-button" onClick={this.startGame}>START NOW</Button>

                

            </div>











        );
    }
}

export default Frontpage;