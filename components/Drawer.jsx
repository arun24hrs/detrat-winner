import { Button, ListItemIcon, SwipeableDrawer } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import ListItemText from '@mui/material/ListItemText';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PostAddIcon from '@mui/icons-material/PostAdd';
import LogoutIcon from '@mui/icons-material/Logout';

const Drawer = () => {
    const [drawerState, setDrawerState] = React.useState(false);

    const toggleDrawer = (open) => (e) => {
        if (
            e &&
            e.type === 'keydown' &&
            ((e).key === 'Tab' ||
              (e).key === 'Shift')
          ) {
            return;
          }
    
          setDrawerState(open);
    }
    const list = () => (
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          p={5}
        >
          <List>
            {['Home', 'Search', 'Posts', 'Live'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index === 0 ? <HomeIcon /> : null}
                    {index === 1 ? <SearchIcon /> : null}
                    {index === 2 ? <PostAddIcon /> : null}
                    {index === 3 ? <LiveTvIcon /> : null}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List >
          <Button variant="contained" color="error" >Logout</Button>
          </List>
        </Box>
      );
  return (
    <React.Fragment>
    <Button onClick={toggleDrawer(true)}>{<MenuIcon/>}</Button>
    <SwipeableDrawer
      anchor={"right"}
      open={drawerState}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
    >
      {list()}
    </SwipeableDrawer>
  </React.Fragment>
  )
}

export default Drawer;
