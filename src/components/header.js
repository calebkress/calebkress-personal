import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

import Home from './Home';
import About from './about';
import Portfolio from './portfolio';
import Contact from './contact';
import Blog from './blog';

const HeadDiv = styled.div`
  padding-top: 5vh;
  text-align: center;
  color: black;
  font-family: 'Roboto';
`;

const Profile = styled.img`
  width: 10em;
  height: 10em;
  border-radius: 100%;
  border: 1px solid;
`;

const TitleBar = styled.h1`
  margin-top: 0.33em;
  margin-bottom: 0;
`

// overall navbar text css
const NavCss = css`
  display: inline-flex;
  font-size: 16px;
  font-family: 'Catamaran';
  color: black;
`
// apply NavCss to links + breaks
const CustomNavLink = styled(NavLink)`
  ${NavCss};
  margin: 0 5px;
`;

const NavBreak = styled.p`
  ${NavCss};
`;

class Header extends Component {
  render() {
    return (
      <HeadDiv>
        <Profile src={require('../assets/profile.jpg')} alt="Caleb Kress" />
        <TitleBar>CALEB KRESS</TitleBar>
        <Router>
          <div>
            <CustomNavLink exact to='/' activeStyle={{ color: '#2296aa' }}>HOME</CustomNavLink>
            <NavBreak> | </NavBreak>
            <CustomNavLink to='about'>ABOUT ME</CustomNavLink>
            <NavBreak> | </NavBreak>
            <CustomNavLink to='portfolio'>PORTFOLIO</CustomNavLink>
            <NavBreak> | </NavBreak>
            <CustomNavLink to='blog'>BLOG</CustomNavLink>
            <NavBreak> | </NavBreak>
            <CustomNavLink to='contact'>GET IN TOUCH</CustomNavLink>
            <hr />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
          </div>
        </Router>
      </HeadDiv>
    )
  }
}

export default Header;
