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
          Javascript | React.js  | Redux | Styled Components
        </p>
        <p>
          Node.js | Electron.js
        </p>
        <p>
          MySQL | Sqlite3 | Git | AWS
        </p>
      </div>
    );
  }
}
export default Home;
