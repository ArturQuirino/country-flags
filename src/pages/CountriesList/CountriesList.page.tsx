import React, { useEffect, useState } from 'react';
import { getAllCountries } from '../../api/CountriesApi';
import { Country } from '../../models/Country';
import CountryCard from './CountryCard/CountryCard';
import styles from './CountriesList.page.module.css';

function CountriesListPage() {
  const [countries, setCountries] = useState<Country[]>([]);

  const getCountries = async () => {
    const allCountries = await getAllCountries();
    setCountries(allCountries);
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <main>
      <div className={styles['conteiner-cards']}>
        {countries.map((country: Country) => (
          <CountryCard country={country} key={country.name} />
        ))}
      </div>
    </main>
  );
}

export default CountriesListPage;
