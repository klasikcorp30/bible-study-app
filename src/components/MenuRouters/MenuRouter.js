import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Bible from './../Bible/Bible';
import News from './../News/News';
import Study from './../Study/Study';
import Chat from './../Chat/Chat';
import { Toolbar, IconButton, Typography, AppBar, Icon, ListItem } from '@material-ui/core';

const useStyles = makeStyles( theme => ({
  list: {
    width: 250,
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({left: false});

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <Link to="/">
          <ListItem button>
              <ListItemIcon><Icon>book</Icon></ListItemIcon>
              <ListItemText primary={"Bible"} />
          </ListItem>
        </Link>
        <Link to="chat">
          <ListItem button>
              <ListItemIcon><Icon>chat</Icon></ListItemIcon>
              <ListItemText primary={"Chat"} />
          </ListItem>
        </Link>
        <Link to="study">
          <ListItem button>
              <ListItemIcon><Icon>group</Icon></ListItemIcon>
              <ListItemText primary={"Study"} />
          </ListItem>
        </Link>
        <Link to="news">
        <ListItem button>
            <ListItemIcon><Icon>info</Icon></ListItemIcon>
            <ListItemText primary={"News"} />
        </ListItem>
        </Link>x
      </List>
    </div>
  );
  return (
    <div>
    <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <IconButton onClick={toggleDrawer('left', true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Bible App
        </Typography>
        <Button color="inherit">Logout</Button>
      </Toolbar>
    </AppBar>
  </div>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
      <Router>
      <Switch>
        <Route path="/" exact component={Bible} />
        <Route path="/chat" component={Chat}/>
        <Route path="/news" component={News}/>
        <Route path="/study" component={Study}/>
      </Switch>
    </Router>
  </div>
  );
}
