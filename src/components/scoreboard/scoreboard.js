import React from 'react';
import './scoreboard.css';

const Scoreboard = props => (
  <div className="container text-center mb-3">
    <div className="row">
      <div className="col-sm-6">
        <div className="row">
          <div className="glove1 col-sm-1 mr-auto"></div>
          <p className="scoreboard col-sm-10">{props.msg}</p>
          <div className="glove2 col-sm-1 ml-auto"></div>
        </div>
      </div>
      <div className="col-sm-6">
        <p className="scoreboard">Score: {props.score} | High Score: {props.highScore}</p>
      </div>
    </div>
  </div>
)

export default Scoreboard;