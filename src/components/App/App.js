import React from 'react';
import styled from 'styled-components/macro';

import Header from '../Header';
import ShoeIndex from '../ShoeIndex';
import { ThemeProvider } from 'styled-components';
import { THEME } from '../../constants';

const App = () => {
  const [sortId, setSortId] = React.useState('newest');
console.log(THEME)
  return (
    <ThemeProvider theme={THEME}>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </ThemeProvider>
  );
};



const Main = styled.main`
  padding: 64px 32px;

  @media ${({ theme }) => theme.QUERIES.tabletAndSmaller} {
    padding: 48px 32px;

  }

 

 
`;

export default App;
