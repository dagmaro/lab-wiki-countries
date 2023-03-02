import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const response = await axios.get(
        ' https://ih-countries-api.herokuapp.com/countries'
      );
      setAllCountries(response.data);
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="App">
      <Navbar />
      <CountriesList countries={allCountries} />

      <Routes>
        <Route path="/country/:id" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
