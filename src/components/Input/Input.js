import React from 'react';
import TextField from '@material-ui/core/TextField';

function Input(props) {

    const changeHandler = event => {

        props.parentFunction(event)
    }

    return (
        <div className="Input">
            <div>
                <TextField
                    id={props.name}
                    label={props.labelName}
                    margin="normal"
                    type={props.inputType}
                    name={props.name}
                    onChange={changeHandler} 
                    value={props.value}
                />
            </div>
        </div>
    );
}

export default Input;