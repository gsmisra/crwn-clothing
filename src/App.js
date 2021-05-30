import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import HomePage from './pages/home-page/home-page-component';
import ShopPage from './pages/shop/shop-component';

  
function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        </Switch>
      </div>
  );
}

export default App;