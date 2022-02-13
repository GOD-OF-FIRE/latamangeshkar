import React, { Component } from 'react';
import './App.css';
import Head from './Head';
import Img from './Img';
import Body from './Body';

class App extends Component{
  render(){
    return(
      <div className='body'>
        <Head/>
        <Img/>
        <Body/>
      </div>
    )
  }

}

export default App;
