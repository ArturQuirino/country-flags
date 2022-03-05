import React from 'react';
import { Country } from '../../../models/Country';
import styles from './CountryCard.module.css';

const CountryCard = ({ country }: { country: Country }) => {
  return (
    <section>
      <img
        src={country.flag}
        alt={`Flag of ${country.name}`}
        className={styles['country-card']}
      ></img>
      <div>{country.name}</div>
      <div>{country.population}</div>
      <div>{country.region}</div>
      <div>{country.capital}</div>
    </section>
  );
};

export default CountryCard;
