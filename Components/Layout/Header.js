import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h5'>Covid19 Stats</Typography>
      </Toolbar>
    </AppBar>
  );
};
