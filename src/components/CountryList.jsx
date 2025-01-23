import styles from './CountryList.module.css';
import Spinner from './Spinner.jsx';
import Message from './Message.jsx';
import CountryItem from './CountryItem.jsx';
import { useCities } from '../contexts/CitiesContext.jsx';

function CountryList() {
  const { isLoading, cities } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking a city on the map" />
    );

  const countries = cities.reduce((acc, city) => {
    if (!acc.map(el => el.country).includes(city.country)) {
      return [...acc, { country: city.country, emoji: city.emoji }];
    } else {
      return acc;
    }
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map(country => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
