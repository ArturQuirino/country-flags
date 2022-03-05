import './App.css';
import Header from './components/header/Header';
import CountriesListPage from './pages/countries-list/CountriesList.page';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <CountriesListPage></CountriesListPage>
    </div>
  );
}

export default App;
