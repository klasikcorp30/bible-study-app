import React, { useState } from 'react'
import { Paper, Avatar } from '@material-ui/core';
import './MessageArea.scss';

export default function MessageArea() {

   
    return (
        <div className="messageArea">
            {messages.map((m, index) => {
                return(
                    index % 2 === 0 ?
                    <div className="message-card">
                        <Avatar alt="Remy Sharp" src="https://picsum.photos/id/200/200/300" />
                        <Paper className="message-box box" key={index}>
                            {m.message}
                        </Paper>
                    </div>
                    :
                    <div className="message-card-alt">
                        <Paper className="message-box box2" key={index}>
                            {m.message}
                        </Paper>
                        <Avatar alt="Remy Sharp" src="https://picsum.photos/id/260/200/300" />
                    </div>
                )
            })}
        </div>
    )
}
