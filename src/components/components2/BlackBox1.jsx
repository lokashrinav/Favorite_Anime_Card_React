import React from 'react';
import './BlackBox.css'

const BlackBox1 = (props) => {
  return (
    <div className="blackbox">
      <div className="white">{props.name}</div>
      <img src={props.source}/>
      <button><a href={props.link}>More Information</a></button>    </div>
  );
  //
}

export default BlackBox1;