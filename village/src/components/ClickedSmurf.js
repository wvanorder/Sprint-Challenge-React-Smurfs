import React from 'react';
import axios from 'axios';
import Smurf from './Smurf';

function ClickedSmurf(props) {
    
    const clickedSmurf = props.smurfs.find(
        smurf => `${smurf.id}` === props.match.params.id
      );
      if (!props.smurfs.length || !clickedSmurf) {
        return <h2>Loading item data...</h2>;
      }
      return (
        <div className="item-wrapper">
          <h1>{clickedSmurf.name}</h1>
        </div>
      );
    }
    
    export default ClickedSmurf;
