import React, { Component, Fragment } from 'react';
import { Header, Footer } from '../Components/Layout';
import Main from '../Components/Main';
import { countries } from '../Components/Main/dataStore.js';
import axios from 'axios';

class HomePage extends Component {
  state = {
    country: 'Total'
  };

  selectCountry = country => {
    this.setState({ country: country });
  };

  getData = country => {
    console.log(`Country is ${country}`);
    let request =
      country === 'Total'
        ? {
            method: 'GET',
            url: 'https://covid-19-data.p.rapidapi.com/totals',
            headers: {
              'content-type': 'application/octet-stream',
              'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
              'x-rapidapi-key':
                'ce9d0722d5msh54e8be5ca7581e7p1a72c4jsnb49f8f2d2e61'
            },
            params: {
              format: 'undefined'
            }
          }
        : {
            method: 'GET',
            url: 'https://covid-19-data.p.rapidapi.com/country',
            headers: {
              'content-type': 'application/octet-stream',
              'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
              'x-rapidapi-key':
                'ce9d0722d5msh54e8be5ca7581e7p1a72c4jsnb49f8f2d2e61'
            },
            params: {
              format: 'undefined',
              name: country.toLowerCase()
            }
          };
    return axios(request);
  };

  render() {
    const { country } = this.state;
    return (
      <Fragment>
        <Header />
        <Main country={country} getData={this.getData} />
        <Footer
          countries={countries}
          country={country}
          onSelect={this.selectCountry}
        />
      </Fragment>
    );
  }
}

export default HomePage;
