import React, {Component} from 'react';
import { Dropdown , Button} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';




class DropdownText extends Component {
    constructor(props){
        super(props);
       

    }

    onChangeDropDown = (event, data) => {
        var newTime = data.value;
        console.log("this is the new value", newTime);
        this.props.onSelectTime(newTime);
        
        // this.setState(() => this.props.onSelectTime(newTime));
    }

   

    render() {
        return (
            <div>

            
            <Dropdown
                placeholder='Duration'
                fluid
                selection
                clearable
                options={this.props.timeOptions}
                onChange={this.onChangeDropDown}
                // onClick={() => this.props.onSelectTime(this.onChangeDropDown)}
                > 
                </Dropdown>

        {/* <Button onClick={() => this.props.onSelectTime(this.state.time)}>Submit</Button> */}

        </div>


        );
    };

}



export default DropdownText;