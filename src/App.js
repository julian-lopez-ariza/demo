import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { Divider } from '@material-ui/core';
import { Switch, Route, Link } from 'react-router-dom';
import Projects from './components/projects';
import Cards from './components/componentsCv/cards';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    background:"white"
  },
  drawer: {
    width: 200,
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawerOpen: {
    width: 200,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: '#6495ED',
    color:'whitesmoke'
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(1) +1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(7) + 1,
    },
    backgroundColor: '#6495ED'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2)
  },
  icon:{
    color:'whitesmoke'
  },
  divider:{
    backgroundColor:'whitesmoke'
  },
  fondo:{
    background:"#B0C4DE"
}
}));

const getMenuForApp = ()=> {
  return [
    { Title:'Tables', Path:'/projects', Component:Projects },
    { Title:'cards', Path:'/componentsCv/cards', Component:Cards }
  ];
};

export default function MiniDrawer() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = (value) => {
    setOpen(!value);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <List>
          <ListItem button key="Mine Project" onClick={() => handleDrawerOpen(open)} >
              <ListItemIcon><MenuIcon className={classes.icon}/></ListItemIcon>
              <ListItemText primary="Mine Project" />
          </ListItem>
          <Divider className={classes.divider}></Divider>
          { getMenuForApp().map((menu, index) => (
            <ListItem button key={menu.Title} component={Link} to={menu.Path}>
              <ListItemIcon><InboxIcon className={classes.icon}/></ListItemIcon>
              <ListItemText primary={menu.Title} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content} >
        <Switch>
          { getMenuForApp().map((menu, index) => (
              <Route path={menu.Path} component={menu.Component} />
          ))}
        </Switch>
      </main>
    </div>
  );
}