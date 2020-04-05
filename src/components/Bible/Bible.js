import React, { Component } from 'react'
import { Container,LinearProgress, ButtonGroup, Button, Box, ListItem, Avatar, ListItemText, Typography } from '@material-ui/core'
import Slide from '@material-ui/core/Slide';
import './Bible.css'
import axios from 'axios';
import Chapter from './Chapter/Chapter';

axios.defaults.headers.common['api-key'] = '3e5ef8c4c24ada0829132e4651bac8b1'

export default class Bible extends Component {
    state = {
        change: true,
        checked:false,
        booksChecked: true,
        books: [],
        chapters: [],
        chapterName: "",
        start: 0,
        end: 66,
        allIsActive: "",
        otIsActive: "",
        ntIsActive: ""
    }

    styles = {
        buttonGrp:{
            padding: "20px 0 0 12px",
            margin: "auto"
        }
    }
    handleClick = (id, name) => {
        axios.get(`https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-02/books/${id}/chapters`)
        .then( res => this.setState({chapters: res.data, booksChecked: false, checked: true, chapterName: name}, () =>{
            console.log(this.state.chapters.data)
        }))
    }

    allBookView = () => {
        this.setState({allIsActive: "colorChange", otIsActive:"", ntIsActive: ""})
        this.setState({start: 0, end: 66});
    }

    oldTestamentView = () => {
        this.setState({allIsActive: "", otIsActive:"colorChange", ntIsActive: ""})
        this.setState({start: 0, end:39});
    }
    
    
    newTestamentView = () => {
        this.setState({allIsActive: "", otIsActive:"", ntIsActive: "colorChange"})
        this.setState({start: 39, end: 66});
    }

    componentDidMount(){
        axios.get('https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-02/books')
        .then(res => {
            this.setState({books: res.data}, () => {
            })  
        })      
    }
    styles = {
        center: {
            display:"flex",
            justifyContent:"center", 
            alignItems:"center",
            margin: "30px 0 20px 0"
        },
        center2:{
            display:"flex",
            justifyContent:"center", 
            alignItems:"center",
            margin: "40px 0 30px 0"
        }
    }   
    render() {
        return (
            
            <Container maxWidth="md">
            {this.state.books.length === 0?
                <Box component="div" style={{marginTop: 100}}>
                    <LinearProgress style={{color: "#00CCFF"}} />
                </Box>

            :
            <Slide direction="right" in={this.state.booksChecked} mountOnEnter unmountOnExit>
            <Box component="div" style={{marginTop: 70}}>
            <ButtonGroup color="primary" style={this.styles.center}>
                <Button onClick={this.allBookView} className={"btn-color "+this.state.allIsActive}>ALL</Button>
                <Button onClick={this.oldTestamentView} className={"btn-color "+ this.state.otIsActive}>OT</Button>
                <Button onClick={this.newTestamentView} className={"btn-color "+ this.state.ntIsActive}>NT</Button>
            </ButtonGroup>
                {this.state.books.data.slice(this.state.start,this.state.end).map( book => {
                    return <ListItem button key={book.id} onClick={() => this.handleClick(book.id, book.name)}>
                                <Avatar style={{marginRight:20}}>{book.abbreviation}</Avatar>
                                <ListItemText primary={book.name} />
                            </ListItem> 
                })}
            </Box>
            </Slide>
            }

        {this.state.chapters.length === 0?
            <Box></Box>
        :
        <Container style={{marginTop:70}} >
        <Button variant="outlined" style={{width:"100%"}}>Back</Button>
        <Typography  style={{margin:"10px 0 10px 0", fontFamily:"Bree Serif', serif"}} variant="h6">{this.state.chapterName}</Typography>
            <Chapter
            style={this.styles.center2}
            checked={this.state.checked} 
            chapters={this.state.chapters.data}
            bibleID="de4e12af7f28f599-02"
            />
        </Container>            
          
        }
            </Container>
        )
    }
}
