import React, {Component} from 'react';
import TestComponent from "../testComp"
class MyComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            showModal:true
        }
    };
    hide=()=>{
        this.setState({
            showModal:false
        })
    };
    show=()=>{
        this.setState({
            showModal:true
        })
    };
    render(){
        return(
            <div>
                {this.state.showModal&& <TestComponent hide={this.hide}> <img src='http://hinex.ru/pic/info/effektivnaja-mobilnaja-reklama.jpg' alt="advertisement" width={500} height="30"/></TestComponent>}
                <button onClick={this.show}>Show</button>
            </div>
        )
    };
}



export default MyComponent;

