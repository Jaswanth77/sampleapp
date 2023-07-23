import React from "react";

class ChildProps extends React.Component
{
    render()
    {
        return(
            <>
                <h1>{this.props.children}</h1>
            </>
        )
    }
}

export default ChildProps