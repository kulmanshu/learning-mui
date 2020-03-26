import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';

export default ({ countries }) => {
  return (
    <Paper>
      <Tabs value={0} indicatorColor='primary' textColor='primary' centered>
        <Tab label='All' />
        {countries.map(country => (
          <Tab label={country} />
        ))}
      </Tabs>
    </Paper>
  );
};
