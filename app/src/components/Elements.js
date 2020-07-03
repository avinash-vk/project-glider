import React from 'react';


//define all markdown types here
const heading_1 = {
    type : 'heading1',
    md : '#',
    children : []
}

//define all md elements here
export const Heading1Element = (props) => {
    return (
        <pre {...props.attributes}>
          <h1>{props.children}</h1>
        </pre>
    )
}

export const DefaultElement = props => {
    return( 
    <p {...props.attributes}>
        {props.children}
    </p>
    )
}