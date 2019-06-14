import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Smurfy = styled.div`
display: flex; 
flex-flow: column nowrap;
width: 400px;
height: 400px;
background-color: #27859B;
justify-content: center;
padding: 10px;
border-radius: 100%;
`

const Linky =styled(Link)`
    font-size: 72px;
    text-decoration: none;
    color: white;
    h3{
      margin: 0;
      margin-bottom: 7px;
    }
    &:hover{
        color:  #FCB5B9;
        transition-duration: 0.3s;
    }
`

const Butty = styled.button`
border-radius: 150px;
width: 250px;
height: 50px;
margin: 0 auto;
background-color: #C9000F;
color: white;
font-size: 28px;
  &:hover{
  color:  #C9000F;
  background-color: white;
  transition-duration: 0.2s;
}
`
const Smurf = props => {


  return (
    <Smurfy className="Smurf">
      <Linky to={`/smurfs/${props.id}`}>
        <h3>{props.name}</h3>
      </Linky>
        <strong>{props.height} tall</strong>
        <p>{props.age} smurf years old</p>
        {props.deleteSmurf && <Butty onClick={() => {props.deleteSmurf(props.smurf.id)}}>ELIMINATE {props.name}</Butty>}
    </Smurfy>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

