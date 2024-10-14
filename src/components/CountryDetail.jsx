import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const CountryDetail = () => {
    const { name } = useParams();
    const [country, setCountry] = useState(null);

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${name}`)
            .then(res => res.json())
            .then(data => setCountry(data[0]))
            .catch(err => console.error(err));
    }, [name]);

    if (!country) return <div>Loading...</div>;

    return (
        <div className="country-detail">
            <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} />
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital}</p>
            <p>Currency: {Object.values(country.currencies)[0].name}</p>
            <p>Region: {country.region}</p>
            <p>Languages: {Object.values(country.languages).join(', ')}</p>
            <p>Timezones: {country.timezones.join(', ')}</p>
            <a href={country.maps.googleMaps} target="_blank" rel="noopener noreferrer">
                View on Google Maps
            </a>
        </div>
    );
};
export default CountryDetail;