import React, { Component } from 'react';
import styled from 'styled-components';

import Smurf from './Smurf';

const SmurfList = styled.div`
display: flex;
flex-flow: row wrap;
justify-content: space-evenly;
width: 90%;
margin: 0 auto;
`

class Smurfs extends Component {


  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        {this.props.smurfs.length > 3 && <h2>It's a party in here!</h2>}
        <SmurfList>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                smurf={smurf}
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                deleteSmurf={this.props.deleteSmurf}
              />
            );
          })}
        </SmurfList>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
