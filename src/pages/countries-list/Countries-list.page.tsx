import React, { useEffect, useState } from 'react';
import { getAllCountries } from '../../api/CountriesApi';
import { Country } from '../../models/Country';

function CountriesListPage() {
  const [countries, setCountries] = useState<Country[]>([]);
  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    const allCountries = await getAllCountries();
    setCountries(allCountries);
  };

  return (
    <div>
      {countries.map((country: Country, index: number) => (
        <div id={`${index}`}>{country.name}</div>
      ))}
    </div>
  );
}

export default CountriesListPage;
