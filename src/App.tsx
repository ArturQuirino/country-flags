import React from 'react';
import './App.css';
import Header from './components/header/Header';
import CountriesListPage from './pages/CountriesList/CountriesList.page';

function App() {
  return (
    <div className="App">
      <Header />
      <CountriesListPage />
    </div>
  );
}

export default App;
