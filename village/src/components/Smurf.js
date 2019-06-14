import React from 'react';
import {Link} from 'react-router-dom';

const Smurf = props => {


  return (
    <div className="Smurf">
    <Link to={`/smurfs/${props.id}`}>
      <h3>{props.name}</h3>
    </Link>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      {props.deleteSmurf && <button onClick={() => {props.deleteSmurf(props.smurf.id)}}>ELIMINATE {props.name}</button>}
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

