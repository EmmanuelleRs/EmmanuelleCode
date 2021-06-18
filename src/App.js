import React from 'react';
import styled from '@emotion/styled';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import GeneralProvider from './context/generalContext';

import Sidebar from './views/sidebar';
import Headbar from './views/headbar';
import Welcome from './views/welcom';

import SortingAlgo from './views/projects/sorting/sorting';
import BinarySearch from './views/projects/binarySearch/search';
import MainUsers from './views/projects/users/main';
import Contact from './views/projects/contact/contact';
import System from './views/sistem';

const Screen = styled.div`
width: 90vw;
height: 90vh;
position: fixed;
top: 5vh;
right: 2vw;
overflow-y: scroll;
padding: 1rem;

::-webkit-scrollbar {
  display: none;
}
  @media only screen and (max-width: 375px) {
    position: unset;
    width: 100%;
    margin: auto;
  }
`;

function App() {
  return (
    <Router>
      <GeneralProvider>
        <Headbar />
        <Sidebar />
        <Screen>
          <Switch>
            <Route exact path='/' component={Welcome}/>
            <Route exact path='/SortingAlgorithms'><SortingAlgo /></Route>
            <Route exact path='/SearchAlgorithms' component={BinarySearch}></Route>
            <Route exact path='/usersData' component={MainUsers}/>
            <Route exact path='/Contact' component={Contact} />
            <Route exact path='/System' component={System}/>
          </Switch>
        </Screen>
      </GeneralProvider>
    </Router>
  );
}

export default App;
