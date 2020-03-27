import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';

export default ({ countries, country, onSelect }) => {
  const index = country ? countries.findIndex(item => item === country) + 1 : 0;

  const onSelectEvent = (e, index) => {
    onSelect(index === 0 ? 'Total' : countries[index - 1]);
  };

  return (
    <Paper>
      <Tabs
        value={index}
        indicatorColor='primary'
        textColor='primary'
        centered
        onChange={onSelectEvent}
      >
        <Tab label='Total' />
        {countries.map(country => (
          <Tab label={country} />
        ))}
      </Tabs>
    </Paper>
  );
};
