
import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import ChangeOperation from '../components/ChangeOperation';
import RangeSelection from '../components/RangeSelection';



class SettingsTable extends Component {

    constructor(props){
        super(props);
        this.state = {
            typeOfEquation: [],
        }
    }




    render() {

        return (

            <Table celled>
                <Table.Header>
                    <Table.Row>
                    
                        <Table.HeaderCell>Operation</Table.HeaderCell>
                        <Table.HeaderCell>Range</Table.HeaderCell>
                        
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    
                    
                    <ChangeOperation operation={"Addition"} addOperation={this.props.addOperation} symbol={"+"} rangeChange={this.props.rangeChange}
                    ></ChangeOperation>

        
                    
                    
                        <ChangeOperation operation={'Subtraction'} addOperation={this.props.addOperation} symbol={"-"} rangeChange={this.props.rangeChange}
                        ></ChangeOperation>
                        
                    
                        <ChangeOperation operation={'Multiplication'} addOperation={this.props.addOperation} symbol={"x"} rangeChange={this.props.rangeChange}
                         ></ChangeOperation>
                        
                   

                   
                        <ChangeOperation operation={'Division'} addOperation={this.props.addOperation} symbol={"/"} rangeChange={this.props.rangeChange}
                        ></ChangeOperation>
                    
                    
            
                </Table.Body>
            </Table>

        );


    }
}



export default SettingsTable;
