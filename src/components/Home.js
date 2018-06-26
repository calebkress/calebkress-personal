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
          Here's the first part of your "about me."
        </p>
        <p>
          This is "about me" part two.
        </p>
        <p>
          Here's a third section for "about me."
        </p>
      </div>
    );
  }
}
export default Home;
