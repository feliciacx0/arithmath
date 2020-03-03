
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
                    
                    <ChangeOperation operation={"Addition"} addOperation={this.props.addOperation}></ChangeOperation>

                
                        <Table.Cell selectable>
                            <a href='#'>Edit</a>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell></Table.Cell>
                        <ChangeOperation operation={'Subtraction'} addOperation={this.props.addOperation}></ChangeOperation>
                        <Table.Cell selectable>
                            <a href='#'>Edit</a>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell></Table.Cell>
                        <ChangeOperation operation={'Multiplication'} addOperation={this.props.addOperation}></ChangeOperation>
                        <Table.Cell selectable>
                            <a href='#'>Edit</a>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row warning>
                        <Table.Cell></Table.Cell>
                        <ChangeOperation operation={'Division'} addOperation={this.props.addOperation}></ChangeOperation>
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
