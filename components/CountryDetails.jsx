import LeftArrowIcon from "../assets/images/LeftArrowIcon"
import { useEffect, useState } from "react"
import { Link, useLocation, useParams } from "react-router-dom";
import ShimmerEffectCountriesDetails from "./ShimmerEffectCountriesDetails";

export default function CountryDetails() {
    const [countryData, setCountryData] = useState(null);
    const [notFound, setNotFound] = useState(false);

    const params = useParams();
    const countryName = params.countryDetails;

    const { state } = useLocation();

    function updateCountryData(newData) {
        setCountryData({
            flagImgUrl: newData.flags.png,
            name: newData.name.common,
            nativeName: Object.values(newData.name.nativeName || {})[0]?.common || newData.name.common,
            population: newData.population.toLocaleString("en-IN"),
            region: newData.region,
            subRegion: (newData.subregion) ? newData.subregion : "No subregion",
            capital: ((newData?.capital) ? newData.capital.join(", ") : "No capital"),
            topLevelDomain: newData.tld.join(", "),
            currency: Object.values((newData.currencies) ? newData.currencies : {}).map((currency) => currency.name).join(", "),
            languages: Object.values((newData.languages) ? newData.languages : {}).join(", "),
            borderCountries: [],
        });

        if (newData.borders) {
            const promiseArr = newData.borders.map((border) => {
                return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
                    .then((req) => req.json())
                    .then(([data]) => data.name.common);
            });

            Promise.all(promiseArr)
                .then((allBordersName) => {
                    setCountryData((previousState) => {
                        return {
                            ...previousState,
                            borderCountries: allBordersName,
                        }
                    })
                })
        }
    }

    useEffect(() => {
        if (state) {
            updateCountryData(state);
        } else {
            fetch(`https://restcountries.com/v3.1/name/${countryName}`)
                .then((res) => res.json())
                .then(([data]) => {
                    updateCountryData(data);
                }).catch((error) => {
                    setNotFound(true);
                });
        }
    }, [countryName]);

    if (notFound) {
        return (
            <div className={`flex-grow p-4 dark:bg-dark-secondary`}>
                <h2 className="text-primary dark:text-dark-text-primary">Country Not Found!</h2>
            </div>
        );
    }

    return (
        <main className="flex-grow dark:bg-dark-secondary">
            <div className="mx-auto max-w-screen-2xl px-7 py-8 sm:p-10 lg:px-16">
                <button className="mb-12 mt-2 inline-flex items-center gap-1 rounded-lg px-4 py-1 shadow-light-blur dark:bg-dark-primary dark:text-white dark:shadow-dark-blur md:px-6 md:py-2 lg:gap-1.5 lg:text-lg" onClick={() => history.back()}>
                    <LeftArrowIcon className="h-4 w-4 lg:h-5 lg:w-5" />
                    <span className="font-semibold">Back</span>
                </button>

                <div className="flex flex-col items-center sm:px-8 lg:flex-row lg:gap-12 xl:gap-20">
                    {
                        (countryData) ? (
                            <>
                                <div className="h-[45vw] sm:h-[40vw] md:px-12 lg:h-72 lg:w-2/5 lg:px-0">
                                    <img src={countryData.flagImgUrl} alt={`${countryData.name} flag`} className="h-full w-full" />
                                </div>
                                <div className="w-full py-10 lg:w-3/5">
                                    <h2 className="mb-5 text-lg font-semibold dark:text-white sm:text-xl lg:text-2xl">{countryData.name}</h2>
                                    <div className="mb-6 flex flex-col gap-6 dark:text-dark-text-secondary sm:flex-row sm:justify-between xl:text-lg">
                                        <div>
                                            <p><span className="font-semibold dark:text-white">Native Name: </span>{countryData.nativeName}</p>
                                            <p><span className="font-semibold dark:text-white">Population: </span>{countryData.population}</p>
                                            <p><span className="font-semibold dark:text-white">Region: </span>{countryData.region}</p>
                                            <p><span className="font-semibold dark:text-white">Sub Region: </span>{countryData.subRegion}</p>
                                            <p><span className="font-semibold dark:text-white">capital: </span>{countryData.capital}</p>
                                        </div>
                                        <div>
                                            <p><span className="font-semibold dark:text-white">Top Level Domain: </span>{countryData.topLevelDomain}</p>
                                            <p><span className="font-semibold dark:text-white">Currencies: </span>{countryData.currency}</p>
                                            <p><span className="font-semibold dark:text-white">Languages: </span>{countryData.languages}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="mb-4 text-lg font-semibold dark:text-white">Border Countries: </h3>
                                        <div className="flex flex-wrap gap-4">
                                            {
                                                (countryData.borderCountries.length) ? (
                                                    countryData.borderCountries.map((country) => {
                                                        return <Link className="rounded-md px-4 py-1 shadow-light-blur dark:bg-dark-primary dark:text-white dark:shadow-dark-blur" key={country} to={`/${country}`}>{country}</Link>
                                                    })
                                                ) : (
                                                    <p className="-mt-4 dark:text-dark-text-secondary">No land borders with any country</p>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <ShimmerEffectCountriesDetails />
                        )
                    }
                </div>
            </div>
        </main>
    )
}
