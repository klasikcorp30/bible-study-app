import React, { Component } from 'react';
import { Slide, Grid, Button, Typography, Box } from '@material-ui/core';
import parser from 'html-react-parser';
import axios from 'axios';

export default class Chapter extends Component{

    state = {
        verses: [],
        verseView: false
    }
    getVerses = (chapter_id) => {
        axios.get(`https://api.scripture.api.bible/v1/bibles/${this.props.bibleID}/chapters/${chapter_id}`)
        .then( resp => this.setState({verses: resp.data, verseView: true}))
    }

    render(){
        return  <Slide direction="left" in={this.props.checked} mountOnEnter unmountOnExit>
                <Box>
                    {this.state.verseView?
                    //   this.state.verses.data.map( (vrs, index) => {
                    //     return <Grid item key={vrs.id}>
                    //                 <Button onClick={() => this.getVerses(vrs.id)}  variant="outlined">{index+1}</Button>
                    //             </Grid>
                    //     })    

                    
                    <Typography style={{fontFamily: "'Cardo', serif"}}>{parser(this.state.verses.data.content)} </Typography>
                     :
                     <Grid container spacing={6}>
                       { this.props.chapters.slice(1).map( ch => {
                        return <Grid item key={ch.id}>
                                        <Button onClick={() => this.getVerses(ch.id)} variant="outlined">{ch.number}</Button>
                                    </Grid>
                        })}
                    </Grid>
                    }
                </Box>
            </Slide>
}
}

