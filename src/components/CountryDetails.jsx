import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CountryDetails() {
  const params = useParams();
  const { id } = params;
  const [countriesDetails, setCountriesDetails] = useState("");

  useEffect(() => {
    getData()
  }, [id]);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://ih-countries-api.herokuapp.com/countries/${id}`
      );
      setCountriesDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {countriesDetails ? (
        <div>
            <h1>{countriesDetails.name.common}</h1>
            <p>Capital: {countriesDetails.capital[0]}</p>
        </div>
      ) : (<p>Loading...</p>)}

    </div>
  );
}

export default CountryDetails;
