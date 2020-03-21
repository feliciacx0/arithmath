import React, {Component} from 'react';
import {Table, Dropdown} from 'semantic-ui-react';


const numberOptions = [
    {key: 'int', value: 'int', text: "Integer"},
    {key: 'dec', value: 'dec', text: "Decimal"},
    {key: 'perc', value: 'perc', text: "Percentage"}
]


class RangeSelection extends Component{

    constructor(props){
        super(props);

        this.state = {
            isInteger: false,
            isDecimal: false,
            isPercent: false,
            integerNum1: 0,
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleNumberChange = this.handleNumberChange.bind(this);
        
        
    };

    // handle checkbox 
    handleInputChange(event){
        const target = event.target;
        const name = target.name; 

        switch(name){
            case 'isInteger':
                this.setState({[name]: target.checked});
                break; 

            case 'isDecimal':
                this.setState({[name]: target.checked});
                break; 
            
            case 'isPercent':
                this.setState({[name]: target.checked});
                break; 
        }


    }

    // handle range change
    handleNumberChange(event){
        const target = event.target; 
        const name = target.name; 

        this.setState({[name]: target.value});


    }






    render(){
        return(

            <Table.Cell>

            <form>
                
                <input
                name="isInteger"
                type="checkbox"
                checked={this.state.isInteger}
                onChange={this.handleInputChange} />
                <label>
                    Integer 
                </label>

                <br />

                <label>
                    Range:
                    <input 
                    name="integerNum1"
                    type="number"
                    value={this.state.integerNum1} 
                        onChange={this.handleNumberChange}
                    />

                </label>

                <br />


                <input
                name="isDecimal"
                type="checkbox"
                checked={this.state.isDecimal}
                onChange={this.handleInputChange} />
                <label>
                    Decimal
                </label>

                <br />

                <input
                name="isPercent"
                type="checkbox"
                checked={this.state.isPercent}
                onChange={this.handleInputChange} />
                <label>
                    Percent
                </label>





            </form>
           
           

           


            </Table.Cell>

            

            
           

            

            
            
                


                
            

            
        );
    };



}

export default RangeSelection;