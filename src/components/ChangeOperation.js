import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';


// a single cell in table -> changes color
class ChangeOperation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            bgColor: 'white',
            num1: 2,
            num2: 100,
            num3: 2,
            num4: 100,

        };

        
        this.handleNumberChange = this.handleNumberChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

    };

    // change color 
    handleClick = () => {
        var color = this.state.clicked ? 'white' : 'green'; 
        this.setState({ bgColor: color , clicked: !this.state.clicked}, 
            () => this.props.addOperation(this.props.operation, this.state.clicked));


    };

    // handle range change
    handleNumberChange(event){
        const target = event.target; 
        const name = target.name; 

        this.setState({[name]: target.value}, 
            () => this.props.rangeChange(this.props.operation, target.value, name));

    };


    render() {
        return (

            <Table.Row>

            

           
                <Table.Cell selectable> 
                <a href="#"
                    onClick={() => this.handleClick()} 
                    style={{ backgroundColor: this.state.bgColor }}>



                    {this.props.operation}
                    </a>
                
                </Table.Cell>


                {this.state.clicked && <Table.Cell>

            <form>
                

                <label>
                    (
                    <input 
                    name="num1"
                    type="number"
                    value={this.state.num1} 
                        onChange={this.handleNumberChange}
                    style={{width: "50px"}}
                    />
                </label>

                to 

                <label>
                    
                    <input 
                    name="num2"
                    type="number"
                    value={this.state.num2} 
                        onChange={this.handleNumberChange}
                        style={{"width": "50px"}}
                    />
                    )
                </label>

                {this.props.symbol}

                <label>
                    (
                    <input 
                    name="num3"
                    type="number"
                    value={this.state.num3} 
                        onChange={this.handleNumberChange}
                        style={{"width": "50px"}}
                    />
                </label>


                <label>
                    
                    <input 
                    name="num4"
                    type="number"
                    value={this.state.num4} 
                        onChange={this.handleNumberChange}
                        style={{"width": "50px"}}
                    />
                    )
                </label>



                <br />



            </form>
           
           


            </Table.Cell>}

                </Table.Row>

            
        );
    }




}

export default ChangeOperation;