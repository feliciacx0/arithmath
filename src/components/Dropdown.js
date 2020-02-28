import React, {Component} from 'react';
import { Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';


var timeOptions = [
    {
        key: '30',
        text: "30 seconds",
        value: 30
    },
    {
        key: '60',
        text: "60 seconds",
        value: 60
    },
]

class DropdownText extends Component {
    constructor(){
        super();

    }

    render() {
        return (
            <Dropdown
                placeholder='Duration'
                fluid
                selection
                clearable
                options={timeOptions}
            />


        );
    };

}



export default DropdownText;