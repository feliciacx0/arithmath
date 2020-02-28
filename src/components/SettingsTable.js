
import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';


class SettingsTable extends Component {

    constructor(){
        super();
        this.state = {
            typeOfEquation: {},
        }
    }

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
                        <Table.Cell>Select All</Table.Cell>
                        <Table.Cell selectable> <a href="#" onClick={() => console.log("clicked")}>Addition</a>
                        </Table.Cell>
                        <Table.Cell selectable>
                            <a href='#'>Edit</a>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell></Table.Cell>
                        <Table.Cell>Subtraction</Table.Cell>
                        <Table.Cell selectable>
                            <a href='#'>Edit</a>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell></Table.Cell>
                        <Table.Cell>Multiplication</Table.Cell>
                        <Table.Cell selectable>
                            <a href='#'>Edit</a>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row warning>
                        <Table.Cell></Table.Cell>
                        <Table.Cell>Division</Table.Cell>
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
