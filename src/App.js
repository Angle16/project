import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import DocumentTitle from 'react-document-title';

import {
  Route,
} from 'react-router-dom'

import { Button } from 'antd-mobile';

import AScreen from './Screen/AScreen';
import BScreen from './Screen/BScreen';

class App extends Component {
  render() {
    return (
    
        <div>
         
          <Route path={'/a'} component={AScreen} />
          <Route path={'/b'} component={BScreen} />
        </div>
      
    );
  }
}

export default App;
