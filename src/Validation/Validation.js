import React from 'react';

const validation = (props) =>{
return( 
    <div className="Validation">
        {props.size<5?
        <p>Text too short</p>: <p>Long enough</p>}
    </div>
    )
}

export default validation;