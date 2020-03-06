import React, {Component} from 'react';


class Endpage extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(

            <div className="results">
            <h1>Finished</h1>

            <h1>Number Correct: {this.props.location.state && this.props.location.state.numCorrect} </h1>


            </div>

            

        )
    };


}



export default Endpage;