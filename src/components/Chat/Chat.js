import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AddIcon from '@material-ui/icons/Add'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './Chat.css';
import { Fab, Grid, Avatar, Divider } from '@material-ui/core';



function Chat(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

Chat.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    marginTop: 55,
  },
}));

export default function TabsWrappedLabel() {
  const classes = useStyles();
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar style={{background:"#00CCFF",position:"relative", boxShadow:"none", zIndex:"1000 !important"}} position="static">
        <Tabs style={{ width: "100%"}} value={value} onChange={handleChange} aria-label="wrapped label tabs example">
          <Tab
            value="one"
            label="Chats"
            style={{margin:"auto"}}
            {...a11yProps('one')}
          />
          <Tab  style={{margin:"auto"}} value="two" label="Groups" {...a11yProps('two')} />
          <Tab  style={{margin:"auto"}} value="three" label="Peoples" {...a11yProps('three')} />
        </Tabs>
      </AppBar>
      <Chat value={value} index="one">
        <Grid item container spacing={3}>
            <Grid container spacing={1}>
                <Grid item xs={2}>
                    <Avatar style={{height:56, width: 56}}>R</Avatar>  
                </Grid>
                <Grid item xs={8}>
                   <Typography style={{marginLeft:20}} variant="subtitle2">Raniel Brown</Typography> 
                   <Typography style={{marginLeft: 20, opacity: 0.7}} variant="caption">lorem ipsum dolor sit...</Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography>01/20</Typography> 
                </Grid>
                <hr />
            </Grid>
        </Grid>
      </Chat>
      <Chat style={{position:"relative"}} value={value} index="two">
        <Fab style={{ position: "absolute", top: 350, left:240, background:"#00CCFF", color:"#FFF"}}aria-label="add">
         <AddIcon />
        </Fab>
      </Chat>
      <Chat value={value} index="three">
        Item Three
      </Chat>
    </div>
  );
}