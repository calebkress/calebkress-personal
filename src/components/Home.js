import React, { Component } from 'react';
import styled from 'styled-components';

const CenteredHeader = styled.h4`
  text-align: center;
  margin-bottom: 1.25em;
`;

class Home extends Component {
  render() {
    return (
      <div>
        <CenteredHeader>"Header"</CenteredHeader>
        <p>
          I'm a full-stack software engineer from Austin, TX.
        </p>
        <p>
          Javascript| React.js  | Node.js | MySQL | Electron.js
        </p>
        <p>
          
        </p>
      </div>
    );
  }
}
export default Home;
