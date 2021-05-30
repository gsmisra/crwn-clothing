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
import HeaderComponent from './components/header/header-component.jsx';
  
function App() {
  return (
    <div>
      <HeaderComponent/>

      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        </Switch>
      </div>
  );
}

export default App;