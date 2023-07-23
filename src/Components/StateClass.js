import React from "react";

class StateClass extends React.Component
{
    checkInc()
    {
        this.setState(
            prevstate =>(
                {name:prevstate.value+1}
            )
        )
    }
    checkDec()
    {
        this.setState(
            prevstate =>(
                {name:prevstate.value-1}
            )
        )
    }
    constructor()
    {
        super()
        this.state = { value : 1}
    }
    render()
    {
        return(
            <>
            <h1>{this.state.value}</h1>
            <button onClick={this.checkInc}>Increase</button>
            <button onClick={this.checkDec}>Decrease</button>
            </>
        )
    }
}

export default StateClass