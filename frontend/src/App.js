import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom';
import * as sessionActions from './store/session';
import Navigation from './components/Navigation';
import AllSpots from './components/Spots/AllSpots';

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
            <Route path='/'>
              <AllSpots />
            </Route>
        </Switch>
      )}
      </>
    )
  );
}

export default App;
