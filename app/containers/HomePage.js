// @flow
import React, { Component } from 'react';
// import Home from '../components/Home';
import HomeMain from '../components/HomeMain';

type Props = {};

export default class HomePage extends Component<Props> {
  props: Props;

  render() {
    return (
      // <Home />
      <HomeMain />
    );
  }
}
