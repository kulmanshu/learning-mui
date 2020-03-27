import React, { Suspense } from 'react';
import { Grid, Paper, Typography, List, ListItem } from '@material-ui/core';
import useSWR from 'swr';

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10
  }
};

export default ({ country, getData }) => {
  const { data } = useSWR(country, getData);

  let confirmedCases = data ? (
    <Typography variant='h6'>
      Confirmed cases: {data.data[0].confirmed}
    </Typography>
  ) : (
    <Typography variant='h6'>Confirmed cases: loading...</Typography>
  );

  let recoveredCases = data ? (
    <Typography variant='h6'>
      Recovered cases: {data.data[0].recovered}
    </Typography>
  ) : (
    <Typography variant='h6'>Recovered cases: loading...</Typography>
  );

  let deaths = data ? (
    <Typography variant='h6'>Deaths: {data.data[0].deaths}</Typography>
  ) : (
    <Typography variant='h6'>Deaths: loading...</Typography>
  );

  return (
    <Grid container>
      <Grid item sm>
        <Paper style={styles.Paper}>
          <Typography variant='h4'>{country}</Typography>
          <List>
            <ListItem>{confirmedCases}</ListItem>
            <ListItem>{recoveredCases}</ListItem>
            <ListItem>{deaths}</ListItem>
          </List>
        </Paper>
      </Grid>
    </Grid>
  );
};
