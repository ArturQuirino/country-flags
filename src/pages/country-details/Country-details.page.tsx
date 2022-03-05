import React, { useEffect, useState } from 'react';
import { getAllCountries } from '../../api/CountriesApi';

export default function CountryDetailsPage() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    getCountries();
  }, [])

  const getCountries = async () => {
    const allCountries = await getAllCountries();
    setCountries(allCountries);
  };
  
  return (
    <div>{countries.map((country) => (<div>
      country.name
    </div>))}</div>
  )
}
