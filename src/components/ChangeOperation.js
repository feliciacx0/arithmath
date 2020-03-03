import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';


// a single cell in table -> changes color
class ChangeOperation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            bgColor: 'white',

        }

    };

    // change color 
    handleClick = () => {
        var color = this.state.clicked ? 'white' : 'green'; 
        this.setState({ bgColor: color , clicked: !this.state.clicked}, 
            () => this.props.addOperation(this.props.operation, this.state.clicked));
    

    };


    render() {
        return (

           
                <Table.Cell selectable> 
                <a href="#"
                    onClick={() => this.handleClick()} 
                    style={{ backgroundColor: this.state.bgColor }}>



                    {this.props.operation}
                    </a>
                
                </Table.Cell>

            
        );
    }




}

export default ChangeOperation;