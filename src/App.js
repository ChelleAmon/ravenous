import logo from './logo.svg';
import './App.css';

import BusinessList from './components/businessList';
import SearchBar from './components/searchbar';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;
