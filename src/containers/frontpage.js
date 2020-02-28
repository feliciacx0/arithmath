import React, {Component} from 'react';
import SettingsTable from '../components/SettingsTable';
import DropdownText from '../components/Dropdown';


class Frontpage extends Component{ 
    constructor(){
        super();
        this.state = {
            typeOfEquation: {},
            time: 60,
        }
    }


    render() {
        return (
            // choose type of equations
            <div>
            
            <SettingsTable class="table">Here</SettingsTable>

           
                 <DropdownText class="time">yikes</DropdownText>

            </div>
           
            
   
            
           

            
           

       

        );
    }
}

export default Frontpage;