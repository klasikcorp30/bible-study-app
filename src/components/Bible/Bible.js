import React, { Component } from 'react'
import { Container,LinearProgress, ButtonGroup, Button, Box, ListItem, Avatar, ListItemText, Grid } from '@material-ui/core'
import Slide from '@material-ui/core/Slide';
import './Bible.css'
import axios from 'axios';

axios.defaults.headers.common['api-key'] = '3e5ef8c4c24ada0829132e4651bac8b1'

export default class Bible extends Component {
    state = {
        change: true,
        books: [],
        start: 0,
        end: 66
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

    allBookView = () => this.setState({start:0, end: 66});
    oldTestamentView = () => this.setState({start:0, end: 39})
    newTestamentView = () => this.setState({start: 39, end: 66});

    componentDidMount(){
        axios.get('https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-02/books')
        .then(res => {
            this.setState({books: res.data}, () => {
                console.log(this.state.books.data.slice(39))
            })  
        })
        
      
    }
    render() {
        return (
            
            <Container maxWidth="md">
            {this.state.books.length === 0?
                <Box component="div" style={{marginTop: 100}}>
                    <LinearProgress style={{color: "#00CCFF"}} />
                </Box>

            :<Box component="div" style={{marginTop: 70}}>
            <ButtonGroup color="primary" style={{display:"flex", justifyContent:"center", alignItems:"center", margin: "30px 0 20px 0"}}>
                <Button onClick={this.allBookView} className="btn-color colorChange">ALL</Button>
                <Button onClick={this.oldTestamentView} className="btn-color">OT</Button>
                <Button onClick={this.newTestamentView} className="btn-color">NT</Button>
            </ButtonGroup>
                {this.state.books.data.slice(this.state.start,this.state.end).map( book => {
                    return <ListItem button key={book.id} onClick={this.handleClick}>
                                <Avatar style={{marginRight:20}}>{book.abbreviation}</Avatar>
                                <ListItemText primary={book.name} />
                            </ListItem> 
                })}
            </Box>
            }
            <Grid container spacing={3}>
                {[1,2,3,4,5,6].map(value => {
                    return <Grid item key={value}>
                        <Button variant="outlined">
                            {value}
                        </Button> 
                    </Grid>
                })}
            </Grid>
            </Container>
        )
    }
}
