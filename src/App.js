import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

function App() {
  return (
    <div className="App">
      <h2>Burger App</h2>
      <Layout>
        <BurgerBuilder></BurgerBuilder> 
      </Layout>
    </div>
  );
}

export default App;
