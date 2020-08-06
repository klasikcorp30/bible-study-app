import React, { useState } from 'react'
import NewsContent from './NewsContent';
import { Grid, Container, TextField, Button, makeStyles, Modal, Fade, Backdrop } from '@material-ui/core';
import axios from 'axios';
import './News.css'


const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

export default function News() {

    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const [videos, setVideos] = useState([]);
    const [searchParam, setSearchParam] = useState("");
    const [videoID, setVideoID] = useState("");

    const handleOpen = (id) => {
        setOpen(true);
        setVideoID(id);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

  const searchVids = async(param) => {
    let resp = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${param}&key=AIzaSyCrX2Yhcua5j7LDwUmdY9y1W1_Amfp6U08&part=snippet&safeSearch=strict&type=video`)
    setVideos(resp.data.items)
  }
        return (
            <Container style={{marginTop:"5em"}}>
                <TextField value={searchParam} onChange={e => setSearchParam(e.target.value)}  placeholder="Watch A Sermon..." variant="outlined" fullWidth style={{marginBottom:"1em"}}/>
                <Button style={{marginBottom:"1em"}} onClick={() => searchVids(searchParam)} className={searchParam!==""&&"button"} disabled={searchParam===""} variant="contained">Search</Button>
                <Grid container spacing={3}>
                        {
                            videos.map((video) => {
                
                                return <Grid item xs={12} lg={4}>
                                            <NewsContent 
                                            title={video.snippet.title} 
                                            description={video.snippet.description}
                                            image={video.snippet.thumbnails.high.url}
                                            watchVideo={() => handleOpen(video.id.videoId)}
                                            />
                                        </Grid>

                            })
                        }
                    
                </Grid>
                <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={open}>
                <div className={classes.paper}>
                <iframe
                    title={`Video for ${videoID}`} 
                    src={`https://www.youtube.com/embed/${videoID}?autoplay=1&mute=1`}
                    frameBorder='0'
                    allow='autoplay; encrypted-media' 
                    width="100%" 
                    height="100%" 
                    allowFullScreen>
                </iframe>
                </div>
                </Fade>
            </Modal>
            </Container>
        )
    
}
