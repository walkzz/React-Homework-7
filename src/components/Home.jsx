import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CountryCard from './CountryCard';

const Home = () => {
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState('');
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
            .catch(err => console.error(err));
    }, []);

    const filteredCountries = countries.filter(country =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <div>
            <input
                type="text"
                placeholder="Search for a country..."
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <div className="country-list">
                {filteredCountries.map(country => (
                    <Link to={`/country/${country.name.common}`} key={country.cca3}>
                        <CountryCard country={country} />
                    </Link>
                ))}
            </div>
        </div>
    );
};
export default Home;