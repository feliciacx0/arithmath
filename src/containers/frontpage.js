import React, { Component } from 'react';
import SettingsTable from '../components/SettingsTable';
import DropdownText from '../components/Dropdown';



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
            typeOfOperation: {},
            time: 0,
        }
        this.handleTime = this.handleTime.bind(this);
    }


    handleTime = (timeValue) => {
        this.setState({ time: timeValue }, () => console.log(this.state.time));
    };


    render() {
        return (
            // choose type of equations
            <div>

                <div>

                    <SettingsTable class="table">Here</SettingsTable>


                    <DropdownText timeOptions={timeOptions} onSelectTime={this.handleTime}> </DropdownText>
                </div>


            </div>











        );
    }
}

export default Frontpage;