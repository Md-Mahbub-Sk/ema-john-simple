import React, { createContext } from 'react';

import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review/Review';
import Manage from './components/Manage/Manage';
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Login from './components/Login/Login';
import { AuthContextProvider, PrivetRouter } from './components/Login/useAuth';
import Ship from './components/Ship/Ship';


export const UserContext = createContext();

function App() {
  return (
    <div className="App">
      <AuthContextProvider value="">
        <Header></Header>
        <Router>
          <Switch>
            <Route path="/shop">
              <Shop></Shop>

            </Route>
            <Route path="/review">
              <Review></Review>
            </Route>
            <Route path="/manage">
              <Manage></Manage>
            </Route>
            <Route exact path="/">
              <Shop></Shop>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivetRouter path="/ship">
              <Ship></Ship>
            </PrivetRouter>
            <Route path="/product/:productKey">
              <ProductDetail></ProductDetail>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthContextProvider>


    </div>
  );
}

export default App;
