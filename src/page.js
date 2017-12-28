import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class Page extends React.Component {

  showAlert(){
    alert('Send me an email 😊: enzzorp@gmail.com')
  }

  render() {
    return (      
      <div className="contain">
        <div className="name">
            Enzo Perez
            <div className="balon">
              <img src="./assets/images/balon.png" className="App-logo" alt="pelota" />
            </div>
        </div>
        <div className="dev">
          Frontend Dev & Frustrated Footballer 😋
        </div>
        <div className="socialMedia">
            <a href="https://github.com/EnzzoPerez" target="_blank"><img src="./assets/images/github.svg" className="" alt="" /></a>
            <a href="https://twitter.com/knockEnzzo" target="_blank"><img src="./assets/images/twitter.svg" className="" alt="" /></a>
            <a href="#" onClick={this.showAlert}><img src="./assets/images/email.svg" className="" alt="" /></a>
        </div>
      </div>

    );
  }
}
