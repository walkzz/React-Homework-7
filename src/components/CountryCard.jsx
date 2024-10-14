/* eslint-disable react/prop-types */
const CountryCard = ({ country }) => {
    return (
        <div className="country-card">
            <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} />
            <h2>{country.name.common}</h2>
            <p>Region: {country.region}</p>
            <p>Population: {country.population.toLocaleString()}</p>
        </div>
    );
};
export default CountryCard;