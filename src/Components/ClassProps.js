import React from "react";

class ClassProp extends React.Component
{
    render()
    {
        return(
            <>
                <h1>{this.props.name}</h1>
            </>
        )
    }
}

export default ClassProp