import logo from './logo.svg';
import './App.css';

import { Businesses } from './model/BusinessData';
import BusinessList from './components/businessList/businessList';
import SearchBar from './components/searchbar/searchbar';


function App() {
  return (
    <div className="App">
      <SearchBar />
      <div>
      { Businesses.map(business => 
          <BusinessList list= {business} /> 
        )}
      </div>
    </div>
  );
};

export default App;
