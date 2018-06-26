import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Linkedin, Github, Medium, Twitter } from 'styled-icons/fa-brands';
import { Envelope } from 'styled-icons/fa-regular'

import { ColorScheme } from '../theme/styleConstants.js'

// css for footer area + background
const FooterDiv = styled.div`
  padding-top: 3rem;
  padding-bottom: 0;
  background-color: ${ColorScheme.mainLight};
  text-align: center;
  height: 100px;
`;

// define custom css for icons
const IconCss = css`
  color: ${ColorScheme.secondary};
  padding: 0px 10px 0px 10px;
  display: inline;
  &:hover {
    color: ${ColorScheme.tertiary};
    transition: all .3s ease;
    transform: scale(1.1) translateY(-5px);
  };
`

// apply css to each icon
const CustomLinkedin = Linkedin.extend`
  ${IconCss}
`;

const CustomEnvelope = Envelope.extend`
  ${IconCss}
`;

const CustomGithub = Github.extend`
  ${IconCss}
`;

const CustomMedium = Medium.extend`
  ${IconCss}
`;

const CustomTwitter = Twitter.extend`
  ${IconCss}
`;

class Footer extends Component {
  render() {
    return (
      <FooterDiv>
        <div className="row social" style={{ margin: 0 }}>
          <div className="col-lg-12">
            <a href="https://github.com/calebkress" target="_blank" rel="noopener noreferrer"><CustomGithub size="48"/></a>
            <a href="http://www.linkedin.com/in/caleb-kress-44316199" target="_blank" rel="noopener noreferrer"><CustomLinkedin size="48"/></a>
            <a href="https://medium.com/@calebkress" target="_blank" rel="noopener noreferrer"><CustomMedium size="48" /></a>
            <a href="https://twitter.com/onKress" target="_blank" rel="noopener noreferrer"><CustomTwitter size="48"/></a>
            <a href="mailto:calebkress@gmail.com" target="_blank" rel="noopener noreferrer"><CustomEnvelope size="48"/></a>
            <br />
          </div>
        </div>
      </FooterDiv>
    );
  }
}

export default Footer;
