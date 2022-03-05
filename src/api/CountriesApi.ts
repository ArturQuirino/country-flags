import axios from 'axios';

const baseURL = "https://restcountries.com/v2/";

const client = axios.create({
  baseURL
})

export const getAllCountries = async () => {
  const response = await client.get('all');
  const countries = response.data;
  return countries;
}