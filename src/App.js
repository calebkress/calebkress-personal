import React, { Component } from 'react';
import styled from 'styled-components';
// component imports
import Header from './components/header.js';
import Footer from './components/footer.js';

const AppDiv = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  font-size: 1.15em;
`;

const ContainerDiv = styled.div`
  margin: 1% 17% 3% 17%;
  flex: 1;
  font-family: 'Open Sans', sans-serif;
`;

class App extends Component {
  render() {
    return (
      <AppDiv>
        <Header />
        <ContainerDiv>
          {this.props.children}
        </ContainerDiv>
        <Footer />
      </AppDiv>
    );
  }
}

export default App;
