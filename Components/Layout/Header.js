import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h5'>Learning MUI with nextjs</Typography>
      </Toolbar>
    </AppBar>
  );
};
