import React, { Component } from 'react';
import './Gallary.css'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';


import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


import clsx from "clsx";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AddIcon from '@material-ui/icons/Add';
const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];

class Gallary extends Component {
  constructor(){
    super();
    this.state = {
      left: false
    }
}
    render() {

        
        const classes = makeStyles((theme) => ({
            root: {
              flexGrow: 1,
            },
            menuButton: {
              marginRight: theme.spacing(2),
            },
          }))

          const useStyles = makeStyles({
            list: {
              width: 250
            },
            fullList: {
              width: "auto"
            }
          })
          
          const toggleDrawer = (anchor, open) => event => {
            if (
              event &&
              event.type === "keydown" &&
              (event.key === "Tab" || event.key === "Shift")
            ) {
              return;
            }
        
            this.setState({left:false, [anchor]: open });
          };
        
          const list = anchor => (
            <div
              className={clsx(useStyles.list, {
                [useStyles.fullList]: anchor === "top" || anchor === "bottom"
              })}
              role="presentation"
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
            >
              <List>
                {["Add Image", "Logout"].map((text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>
                      {index % 2 === 0 ? <AddIcon className="MuiSvgIcon" /> : <ExitToAppIcon className="MuiSvgIcon"/>}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
              <Divider />
            </div>
          );
        return (
            <div>
               <div className={classes.root}>
                    <AppBar position="static">
                        <Toolbar variant="dense">
                        {["left"].map(anchor => (
        <React.Fragment key={anchor}>
          <IconButton edge="start" onClick={toggleDrawer(anchor, true)} className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon /> 

          </IconButton>
          <SwipeableDrawer
            anchor={anchor}
            open={this.state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>

      ))}
                        <Typography variant="h6" color="inherit">
                            Gallary
                        </Typography>
                        </Toolbar>
                    </AppBar>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                </div>
        <div>
    
      </div>
            <GridList cellHeight={200} className='gridList' cols={2}>
                {images.map((tile) => (
                    <GridListTile key={tile.original} cols={tile.cols || 1}>
                    <img src={tile.original}  />
                    </GridListTile>
                ))}
            </GridList>
            </div>
        );
    }
}

export default Gallary;