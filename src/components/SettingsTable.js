
import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import ChangeOperation from '../components/ChangeOperation';


class SettingsTable extends Component {

    constructor(props){
        super(props);
        this.state = {
            typeOfEquation: [],
        }
    }

    addOperation = (operation, clicked) => {  
        // console.log(operation);

        // if newly clicked -> add to operation list; else, remove 
        if(clicked){
            this.state.typeOfEquation.push(operation);
            console.log(this.state.typeOfEquation);
        } else{
            var filterArr = this.state.typeOfEquation.filter(e => e != operation);

            this.setState({typeOfEquation: filterArr}, () => console.log(this.state.typeOfEquation));

        }

    };


    // create rows in each table 
    createRows = () => {
    };



    render() {

        return (

            <Table celled>
                <Table.Header>
                    <Table.Row>
                    
                        <Table.HeaderCell>Enabled</Table.HeaderCell>
                        <Table.HeaderCell>Operation</Table.HeaderCell>
                        <Table.HeaderCell>Range</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>

                    <Table.Cell></Table.Cell>
                    
                    <ChangeOperation operation={"Addition"} addOperation={this.addOperation}></ChangeOperation>

                
                        <Table.Cell selectable>
                            <a href='#'>Edit</a>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell></Table.Cell>
                        <ChangeOperation operation={'Subtraction'} addOperation={this.addOperation}></ChangeOperation>
                        <Table.Cell selectable>
                            <a href='#'>Edit</a>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell></Table.Cell>
                        <ChangeOperation operation={'Multiplication'} addOperation={this.addOperation}></ChangeOperation>
                        <Table.Cell selectable>
                            <a href='#'>Edit</a>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row warning>
                        <Table.Cell></Table.Cell>
                        <ChangeOperation operation={'Division'} addOperation={this.addOperation}></ChangeOperation>
                        <Table.Cell selectable warning>
                            <a href='#'>Requires change</a>
                        </Table.Cell>
                    </Table.Row>
            
                </Table.Body>
            </Table>

        );


    }
}



export default SettingsTable;
