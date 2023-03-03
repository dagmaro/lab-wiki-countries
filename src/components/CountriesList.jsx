import React from 'react';
import { Link } from 'react-router-dom';

function CountriesList(props) {
  const { countries } = props;

  const sortedCountries = countries.sort((a, b) => 
    a.name.common.localeCompare(b.name.common))

  return (
    <div>
      {sortedCountries.length > 0 && (
        <div>
          {sortedCountries.map((country) => {
            return (
              <p key={country.alpha2Code}>
                <Link to={`country/${country.alpha3Code}`}>
                  <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="country" />
                  {country.name.common}
                </Link>
              </p>
            );
          })}
        </div>
      )}
      {sortedCountries.length === 0 && <h2>Loading...</h2>}
    </div>
  );
}

export default CountriesList;
