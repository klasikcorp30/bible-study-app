import React from 'react'
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';

import { Toolbar, IconButton, Typography, AppBar, Icon, ListItem, SwipeableDrawer } from '@material-ui/core';

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
  link: {
    textDecoration:"none",
    color: "black"
  },
  AppBar:{
    backgroundColor:"#00CCFF"
  }
}));

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({left: false});

  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
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
        <Link to="/" className={classes.link}>
          <ListItem button>
              <ListItemIcon><Icon>book</Icon></ListItemIcon>
              <ListItemText primary={"Bible"} />
          </ListItem>
        </Link>
        <Link to="chat" className={classes.link }>
          <ListItem button>
              <ListItemIcon><Icon>chat</Icon></ListItemIcon>
              <ListItemText primary={"Chat"} />
          </ListItem>
        </Link>
        <Link to="study" className={classes.link}>
          <ListItem button>
              <ListItemIcon><Icon>group</Icon></ListItemIcon>
              <ListItemText primary={"Study"} />
          </ListItem>
        </Link>
        <Link to="sermons" className={classes.link }>
        <ListItem button>
            <ListItemIcon><Icon>info</Icon></ListItemIcon>
            <ListItemText primary={"Sermons"} />
        </ListItem>
        </Link>
      </List>

    </div>
  );
  return (
    <div>
    <div className={classes.root}>
    <AppBar position="fixed" className={classes.AppBar}>
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
      <SwipeableDrawer open={state.left} onOpen={toggleDrawer('left', true)} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </SwipeableDrawer>
  </div>
  );
}
