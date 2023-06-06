import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom';
import * as sessionActions from './store/session';
import Navigation from './components/Navigation';
import AllSpots from './components/Spots/AllSpots';
import SingleSpot from './components/Spots/SingleSpot';
import CreateSpot from './components/Spots/CreateSpot';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true))
  }, [dispatch]);
  
  return (
    isLoaded && (
      <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
            <Route exact path='/'>
              <AllSpots />
            </Route>
            <Route exact path='/spots/new'>
              <CreateSpot />
            </Route>
            <Route path={`/spots/:spotId`}>
              <SingleSpot />
            </Route>
        </Switch>
      )}
      </>
    )
  );
}

export default App;
