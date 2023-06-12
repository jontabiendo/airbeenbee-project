import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom';
import * as sessionActions from './store/session';
import Navigation from './components/Navigation';
import AllSpots from './components/Spots/AllSpots';
import SingleSpot from './components/Spots/SingleSpot';
import SpotForm from './components/Spots/SpotForm';
import ManageSpots from './components/Spots/ManageSpots';
import EditSpotForm from './components/Spots/EditSpotForm';
import About from './components/About/Index.js';

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
              <SpotForm />
            </Route>
            <Route exact path='/spots/current'>
              <ManageSpots />
            </Route>
            <Route exact path={`/spots/:spotId`}>
              <SingleSpot />
            </Route>
            <Route exact path={`/spots/:spotId/edit`}>
              <EditSpotForm />
            </Route>
        </Switch>
      )}
      <About />
      </>
    )
  );
}

export default App;
