import React, { useState, useEffect, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountryIndData } from "../../api/postApi";
import Loader from "../UI/Loader";

const CountryDetails = () => {
  const params = useParams();

  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState();

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryIndData(params.countryName); //Ind stands for individual
      setCountry(res.data[0]);
    });
  }, []);

  if (isPending) return <Loader />;

  //console.log(params); // This will log the countryName parameter from the URL
  return (
    <section className="card country-details-card container">
      <div className="container-card bg-white-box">
        {country && (
          <div className="country-image grid grid-two-cols">
            <img
              src={country.flags.svg}
              alt={country.flags.alt}
              className="flag"
            />
            <div className="country-content">
              <p className="card-title">{country.name.common}</p>
              <div className="infoContainer">
                <p>
                  <span className="card-description">Native Names:</span>
                  {Object.keys(country.name.nativeName) // Object.keys converts all key into an array and then we can use the map method on that array.
                    .map((key) => country.name.nativeName[key].common)
                    .join(", ")}
                </p>
                <p>
                  <span className="card-description">Populations:</span>
                  {country.population.toLocaleString()}
                </p>
                <p>
                  <span className="card-description">Region:</span>
                  {country.region}
                </p>
                <p>
                  <span className="card-description">Sub Region:</span>
                  {country.subregion}
                </p>
                <p>
                  <span className="card-description">Capital:</span>
                  {country.capital}
                </p>
                <p>
                  <span className="card-description">Top Level Domain:</span>
                  {country.tld[0]}
                </p>
                <p>
                  <span className="card-description">Currencies:</span>
                  {Object.keys(country.currencies)
                    .map((key) => country.currencies[key].name)
                    .join(", ")}
                </p>
                <p>
                  <span className="card-description">Languages:</span>
                  {Object.keys(country.languages)
                    .map((key) => country.languages[key])
                    .join(", ")}
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="country-card-backBtn">
          <NavLink to="/country" className="backBtn">
            <button>Go Back</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default CountryDetails;
