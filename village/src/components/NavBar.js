import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    background-color: #002A34;
    height: 80px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: baseline;
    
`

const Title = styled(NavLink)`
  font-size: 72px;
  text-align: center;
  color: #FCB5B9;
  text-decoration: none;
  text-align: left;
  margin-right: 30%;
  &:hover{
    color: white;
    transition-duration: 0.3s;
}
`;

const Linky =styled(NavLink)`
    font-size: 26px;
    text-decoration: none;
    color: white;
    &:hover{
        color:  #FCB5B9;
        transition-duration: 0.3s;
    }
`

const NavBar = props => {

    return(
    <Nav>
        <Title to="/"> Smurfville, USA</Title>
        <Linky to="/form">Add a Smurf to the Party!</Linky>
    </Nav>
    )
};

export default NavBar;