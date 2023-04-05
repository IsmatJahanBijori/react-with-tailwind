import React from 'react';
import Navbar from './components/Navbar/Navbar';
import PriceList from './components/PriceList/PriceList';
import Dashboard from './components/Dashboard/Dashboard';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <h1 className='text-4xl text-purple-500 font-bold'>Hello React Router</h1>
      <PriceList></PriceList>
      <Dashboard></Dashboard>
    </div>
  );
};

export default App;