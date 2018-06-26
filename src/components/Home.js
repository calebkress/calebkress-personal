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
        <CenteredHeader>"If you believe breaking is possible, believe fixing is possible." - R. Nachman</CenteredHeader>
        <p>
          in home
        </p>
        <p>
          Editing this text so that
        </p>
        <p>
          the "home" branch gets created.
        </p>
      </div>
    );
  }
}
export default Home;
