import React from 'react'
import { 
    Row, 
    MessageList, 
    MessageGroup, 
    Message, 
    MessageText, 
    TextComposer,
    SendIcon,
    } from '@livechat/ui-kit'
import { useState } from 'react';
import { TextField, IconButton } from '@material-ui/core';


export default function () {
    const [messages, setMessage] = useState([
        {
            message: "Hey, how are you this morning?"
         },
         {
            message: "I am fine and how are you?"
         },
         {
            message: "I am fine as well.  Just want to share a scripture with you. Psalms 119?"
         },
         {
            message: "Thank you so much, have a blessed day"
         },
         {
            message: "Good evening Brother, How are you"
         },
         {
            message: "I am having a blessed day sister, thank you"
         }
    ]);
    const [messageContent, setMessageContent] =useState("");
    const sendMessage = (message) => {
        setMessage([...messages,{message}])
        setMessageContent("")
    }
    return (
        <div style={{marginTop:"4em", maxWidth: '100%', height: 400 }}>
        <MessageList active>
        {messages.map((m, i) => {
            return (
                <MessageGroup 
                key={i}
                avatar={i%2===0?"https://gravatar.com/avatar/39f84057cbe6f2eeb26de066fbdbf389?s=400&d=robohash&r=x":"https://api.adorable.io/avatars/285/abott@adorable.png"}
                isOwn={i%2!==0}
                >
                    <Message style={{backgroundColor:i%2===0?"00ccff":"#232"}} key={i}>
                        <MessageText key={i}>{m.message}</MessageText>
                    </Message>
                </MessageGroup>

            )
        })}
        </MessageList>
        <TextComposer active>
            <Row>
                <TextField
                 variant="outlined" 
                 value={messageContent}
                 placeholder="Type A Message..." 
                 fullWidth
                 onChange={e => setMessageContent(e.target.value)}
                 InputProps={{
                     endAdornment: (
                        <IconButton onClick={() => sendMessage(messageContent)}>
                            <SendIcon />
                        </IconButton>
                     )
                 }} 
                 />
            </Row>
        </TextComposer>
      </div>
    )
}
