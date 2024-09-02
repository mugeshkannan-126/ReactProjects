import React, {Component} from "react";

class ToggleMessage extends Component{
    constructor()
    {
        super();
        this.state = {
            message : true
        }
    };
    toggleMessage = () => {
        this.setState(prevState => ({
            message: prevState.message === true ? false : true
        }));
    };
    render()
    {
        return(
            <div style={{backgroundColor:"lightgreen",justifyContent:"center", alignItems:"center",textAlign:"center", height:"100vh",alignContent:"center"}}>
                <button onClick={this.toggleMessage}>{this.state.message === true ? 'Hide Component' : 'Show Component'}</button>
                <br/>
                {this.state.message && <p>Hi! How Are You!!!</p>}
            </div>
        )
    }
}
export default ToggleMessage;