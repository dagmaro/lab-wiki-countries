import React from 'react';
import { Link } from 'react-router-dom';

function CountriesList(props) {
  const { countries } = props;

  return (
    <div>
      {countries.map(country => (
        <div key={country.alpha2Code}>
          <Link to={`/country/${country.alpha3Code}`}>
            {country.name.common}
          </Link>
            
        </div>
      ))}
    </div>
  );
}

export default CountriesList;
