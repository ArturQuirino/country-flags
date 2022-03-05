import React, { useEffect, useState } from 'react';
import { getAllCountries } from '../../api/CountriesApi';
import { Country } from '../../models/Country';
import CountryCard from './country-card/Country-card';
import styles from './Countries-list.page.module.css';

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
    <main>
      <div className={styles['conteiner-cards']}>
        {countries.map((country: Country, index: number) => (
          <CountryCard
            country={country}
            key={country.name + index}
          ></CountryCard>
        ))}
      </div>
    </main>
  );
}

export default CountriesListPage;
