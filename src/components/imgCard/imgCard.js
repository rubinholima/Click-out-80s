import React from 'react';
import './imgCard.css';

const ImgCard = props => (
  <div
      id={props.name}
      onClick={() => props.handleClick(props.name)}
    >
      <img className="img-thumbnail" alt={props.name} src={props.img_url} />
  </div>
);

export default ImgCard;