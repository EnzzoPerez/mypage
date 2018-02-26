import React from 'react';
import './App.css';

export default class Page extends React.Component {

  showAlert(){
    alert('Send me an email 😊: enzzorp@gmail.com')
  }

  render() {
    return (      
      <div className="contain">
        <div className="name">
        $<span className="guionBajo">_ </span> Enzo Perez
        </div>
        <div className="dev">
          Frontend Dev  (& Frustrated Footballer 😋)
        </div>
        <div className="link">
          <a href="https://enzzoperez.github.io/my-cv" target="_blank" rel="nofollow noopener noreferrer">Link to my web resume</a>
        </div>
        <div className="socialMedia">
            <a href="https://github.com/EnzzoPerez" target="_blank" rel="nofollow noopener noreferrer"><i id="github" className="fab fa-github-square fa-5x" ></i></a>
            <a href="https://twitter.com/enzzoperez_" target="_blank" rel="nofollow noopener noreferrer"><i id="twitter" className="fab fa-twitter-square fa-5x"></i></a>
            <a href="https://www.linkedin.com/in/enzoperezm/" target="_blank" rel="nofollow noopener noreferrer"><i id="twitter" className="fab fa-linkedin fa-5x"></i></a>
            <a onClick={this.showAlert}><i className="fas fa-envelope-square fa-5x"></i></a>
        </div>
        
      </div>

    );
  }
}
