import React from 'react';
import { Link } from 'react-router-dom';

function CountriesList(props) {
  const { countries } = props;

  return (
    <div>
      {countries.length > 0 && (
        <div>
          {countries.map((country) => {
            return (
              <div key={country.alpha2Code}>
                <Link to={`country/${country.alpha3Code}`}>
                  {country.name.common}
                </Link>
              </div>
            );
          })}
        </div>
      )}
      {countries.length === 0 && <h2>Loading...</h2>}
    </div>
  );
}

export default CountriesList;
