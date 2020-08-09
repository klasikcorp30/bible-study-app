import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './scripture.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ThemeProvider} from '@livechat/ui-kit';

const theme = {
    vars: {
        'primary-color': '#00ccff',
        'secondary-color': '#fff',
        'tertiary-color': '#eee',
        'avatar-border-color': '333',
    },
    AgentBar: {
        Avatar: {
            size: '42px',
        },
        css: {
            backgroundColor: 'var(--secondary-color)',
            borderColor: 'var(--avatar-border-color)',
        }
    },
    Message: {
        css: {
            fontWeight: 'regular',
            fontFamily:"Roboto",
            backgroundColor:"var(--primary-color)",
            color:"var(--secondary-color)",
            borderRadius:10,
            display:"inline-block"
        },
    },
    TextComposer:{
        css:{
            // marginTop:"30vh"
        }
    }
}

ReactDOM.render(
<ThemeProvider theme={theme}>
    <App />
</ThemeProvider>,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
