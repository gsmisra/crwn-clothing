import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import HomePage from './pages/home-page/home-page-component';

const HatsPage = () => (
  <div>
    <h1>Hats page</h1>
  </div>
)

const SneakersPage = () => {
  return(
  <div>
    <h1>Shop for sneakers here!</h1>
  </div>
  )
}
  
function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop/hats' component={HatsPage} />
        <Route exact path='/shop/sneakers' component={SneakersPage} />
        </Switch>
      </div>
  );
}

export default App;