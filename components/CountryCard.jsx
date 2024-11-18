import { Link } from "react-router-dom";

export default function CountryCard({ imgUrl, name, population, region, capital, countryData }) {
    return (
        <Link to={`/${name}`} className="overflow-hidden rounded-md text-primary shadow-light-blur dark:bg-dark-primary dark:text-dark-text-primary dark:shadow-dark-blur" state={countryData}>
            <img src={imgUrl} alt={`${name}_flag`} loading="lazy" className="h-48 w-full object-fill" />
            <div className="px-5 py-6">
                <h3 className="mb-2 text-lg font-bold lg:text-xl">{name}</h3>
                <p className="font-semibold lg:text-lg">Population: <span className="font-normal dark:text-dark-text-secondary">{population}</span></p>
                <p className="font-semibold lg:text-lg">Region: <span className="font-normal dark:text-dark-text-secondary">{region}</span></p>
                <p className="font-semibold lg:text-lg">capital: <span className="font-normal dark:text-dark-text-secondary">{capital}</span></p>
            </div>
        </Link >
    )
}
