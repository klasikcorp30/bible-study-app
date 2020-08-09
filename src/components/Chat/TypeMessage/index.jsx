import React from 'react'
import { TextField, Button } from '@material-ui/core';
import './TypeMessage.scss';

export default function TypeMessage() {
    return (
        <div className="type-message">
                <TextField style={{position:"fixed", top: "36em", width:250}} variant="outlined" placeholder="Type A Message..."/> 
                <Button style={{position:"fixed", top: "42em", left:"20em"}} className="send-btn" variant="contained" color="primary">Send</Button>
        </div>
    )
}
