import React, { Component } from 'react'
import { Container, ButtonGroup, Button, Box, ListItem, Avatar, ListItemText } from '@material-ui/core'
import './Bible.css'
import axios from 'axios';

axios.defaults.headers.common['api-key'] = '3e5ef8c4c24ada0829132e4651bac8b1'

export default class Bible extends Component {
    state = {
        change: true,
        books: []
    }

    styles = {
        buttonGrp:{
            padding: "20px 0 0 12px",
            margin: "auto"
        }
    }
    handleClick = () => {
        this.setState({change: !this.state.change})
    }

    componentDidMount(){
        axios.get('https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-02/books')
        .then(res => {
            this.setState({books: res.data}, () => {
            })  
        })
        
      
    }
    render() {
        return (
            <Container maxWidth="md">
            {this.state.change?
                <Box component="div" style={{marginTop: 100}}>
                    <ListItem button>
                        <Avatar onClick={this.handleClick} style={{marginRight:20}}>B</Avatar>
                        <ListItemText primary="Book " />
                    </ListItem>
                    
                </Box>

            :<Box component="div" style={{marginTop: 70}}>
                {this.state.books.data.map( book => {
                    return <ListItem button key={book.id} onClick={this.handleClick}>
                                <Avatar style={{marginRight:20}}>{book.abbreviation}</Avatar>
                                <ListItemText primary={book.name} />
                            </ListItem> 
                })}
            </Box>
            }
            </Container>
        )
    }
}
