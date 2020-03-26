import React, { Component, Fragment } from 'react';
import { Header, Footer } from '../Components/Layout';
import Main from '../Components/Main';
import { countries } from '../Components/Main/dataStore.js';

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Main />
        <Footer countries={countries} />
      </Fragment>
    );
  }
}

export default HomePage;
