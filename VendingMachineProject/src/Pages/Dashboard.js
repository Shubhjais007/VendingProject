import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
//import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
//Icons 
import {HomeRounded, ExitToAppRounded, PersonAddRounded, DeviceHubRounded } from '@material-ui/icons';
//import AssignmentRoundedIcon from '@material-ui/icons/AssignmentRounded';
//import logo from '../Media/embalogo.png';
import logo from '../Media/NutriFills_logo.jpg';

//import GirdList Table
//import {EnhancedTable} from '../Components/Component/GridList';
import HomeFragments from '../Fragments/HomeFragments';
import DeviceFragments from '../Fragments/DeviceFragments';
//import StatusFragments from '../Fragments/StatusFragments';
import AddDeviceFragments from '../Fragments/AddDeviceFragments';
import UserFragments from '../Fragments/UserFragments';
//import LogoutFragments from '../Fragments/Logoutfragments';
import { firebaseAuth } from '../firebase';
import {Redirect} from 'react-router-dom';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();
  const [fragement, setfragment] = useState("Home");
  let userName = JSON.parse(localStorage.getItem('user'));
  let checkRole = (userName !== null ? userName.first_name : "");
  
  const loadFragement = () => {
      switch(fragement) {
        case "Home":
            return <HomeFragments/>;
        case "Device":
            return <DeviceFragments/>;
        case "AddDevice":
            return <AddDeviceFragments/>;
        case "User":
            return <UserFragments/>;
        case "Logout":            
            firebaseAuth.signOut();
            localStorage.removeItem('user');
            localStorage.removeItem('selectedRow');
            localStorage.removeItem('usertoken');
            return <Redirect to='/login' />;            
        default:
            break;
      }
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>          
            <img src={logo} height="50px" width="60px" alt="logo" style={{marginRight:"16px"}}/>
            <Typography display="inline">
              <Typography variant="h5">NutriFills</Typography>            
              <Typography variant="subtitle2"  color="textPrimary">Anytime Healthy Bites</Typography>  
            </Typography>                           
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>            
            <ListItem button onClick={(e) => {setfragment("Home")}}>
                <HomeRounded color="primary" style={{marginRight:"4px"}}/>
                <ListItemText primary={"Home"} display="inline" />
            </ListItem> 
            <ListItem button onClick={(e) => {setfragment("Device")}}>
                <DeviceHubRounded color="primary" style={{marginRight:"4px"}}/>
                <ListItemText primary={"Device"} display="inline"/>
            </ListItem> 
            {
              checkRole === 'Admin' ?
              <ListItem button onClick={(e) => {setfragment("AddDevice")}}>
                  <DeviceHubRounded color="primary" style={{marginRight:"4px"}}/>
                  <ListItemText primary={"Add Device"} display="inline"/>
              </ListItem>
              : null
             }      
            {
              checkRole === 'Admin' ?
              <ListItem button onClick={(e) => {setfragment("User")}}>
                  <PersonAddRounded color="primary" style={{marginRight:"4px"}}/>
                  <ListItemText primary={"User"} display="inline"/>
              </ListItem>
              : null
             }            
          </List>
          <Divider />
          <List>            
            <ListItem button onClick={(e) => {setfragment("Logout")}}>
            <ExitToAppRounded color="primary" style={{marginRight:"4px"}}/>
            <ListItemText primary={"Logout"} display="inline"/>
            </ListItem>            
          </List>
          <Divider />
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        {loadFragement()}   
      </main>
    </div>
  );
}
