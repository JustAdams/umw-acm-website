import React from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import HomePage from './containers/HomePage/HomePage';


function App() {
  return (
    <div className="App">
      <Layout>
        <HomePage />
      </Layout>
    </div>
  );
}

export default App;
