import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import VideoPlayer from './components/VideoPlayer';
import Sidebar from './components/Sidebar';
import Notifications from './components/Notifications';
import { PlayCircleFilledWhite } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  appBar: {
      borderRadius: 0,
      margin: '30px 100px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '800px',
      border: '5px, solid black',
      color: "white",
      elevation: 0,
      paddingTop: "50px",

      [theme.breakpoints.down('xs')]:{
          width: '90%',
      },
  },

  wrapper: {
      display: 'flex',
      flexDirection: "column",
      alignItems: 'center',
      width: '100%',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Typography className={classes.appBar} variant="h3" align="center" style={{ fontWeight: 400 }}>Create a meeting or join one</Typography>
      <VideoPlayer />
      <Sidebar>
        <Notifications />
      </Sidebar>
    </div>
  );
};

export default App;
