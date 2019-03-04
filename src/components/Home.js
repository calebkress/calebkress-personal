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
        <CenteredHeader>Full-stack software engineer from Austin, TX</CenteredHeader>
        <p>
          Javascript | React.js  | Redux | Python
        </p>
        <p>
          Node.js | Electron.js | d3.js
        </p>
        <p>
          MySQL | Sqlite3 | Git | AWS
        </p>
      </div>
    );
  }
}
export default Home;
