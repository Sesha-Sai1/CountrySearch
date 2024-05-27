import React, { useEffect, useState } from "react";

const CountrySearch = () => {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const fetchSuggestions = (query) => {
    if (query.length > 0) {
      fetch(`https://restcountries.com/v3.1/name/${query}`)
        .then((res) => res.json())
        .then((data) => setSuggestions(data))
        .catch((err) => console.log(err));
    } else {
      setSuggestions([]);
    }
  };

  useEffect(() => {
    fetchSuggestions(search);
  }, [search]);
  const handleCountrySearch = () => {
    fetch(`https://restcountries.com/v3.1/name/${search}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCountries(data);
        console.log(data);
        setSearch("");
      })
      .catch((err) => {
        console.log(err);
        alert("Error while fetching single Country");
      });
  };

  const handleSuggestionClick = (country) => {
    setSearch(country.name.common);
    setSuggestions([]);
    setCountries([country]);
    setSearch("");
  };
  return (
    <>
      <div className="mainContainer">
        <div className="container">
          <h1>
            <i
              class="fa-solid fa-earth-americas"
              style={{ marginRight: "5px", color: "red" }}
            ></i>
            <span style={{ color: "red" }}>Country </span>
            <span style={{ color: "green" }}>Search</span>
            <i
              class="fa-solid fa-magnifying-glass-location"
              style={{ marginLeft: "5px", color: "green" }}
            ></i>
          </h1>
          <h4>Search for the Country that you want to know</h4>
          <label>
            <b style={{ color: "green" }}>Search Country</b>
          </label>
          <br />
          <input
            type="text"
            placeholder="Enter a country that you want to search"
            size={35}
            value={search}
            onChange={handleSearch}
            className="searchBar"
            style={{ marginTop: "3px", marginBottom: "6px" }}
          />
          {suggestions.length > 0 && (
            <ul className="suggestions-list">
              {suggestions.map((country) => (
                <li
                  key={country.cca3}
                  onClick={() => handleSuggestionClick(country)}
                >
                  {country.name.common}
                </li>
              ))}
            </ul>
          )}
          <br />
          <button onClick={handleCountrySearch} className="searchBtn">
            Search
            <i
              className="fa-solid fa-magnifying-glass"
              style={{ marginLeft: "5px" }}
            ></i>
          </button>

          <div style={{ marginTop: "12px" }}>
            {countries.length > 0
              ? countries.map((country) => {
                  return (
                    <div
                      style={{
                        border: "2px dotted green",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "20px",
                      }}
                      className="details-container"
                    >
                      <div>
                        <img
                          src={country.flags.svg}
                          height={100}
                          width={100}
                          alt={country.flags.alt}
                        />
                      </div>
                      <div>
                        <img
                          src={country.coatOfArms.png}
                          height={100}
                          width={100}
                          alt={country.flags.alt}
                        />
                      </div>
                      <div>
                        <h2>{country.name.common}</h2>
                        <p>
                          <b>Official-Name = {country.name.official}</b>
                        </p>
                        <p>
                          <b>Common-Name ={country.name.common}</b>
                        </p>
                        <p>
                          <span>
                            <b>
                              Capital = {country.capital[0]} - Continent =
                              {country.continents[0]}
                            </b>
                          </span>
                        </p>
                        <p>
                          <span>
                            <b>
                              Population = {country.population} - Area =
                              {country.area}
                            </b>
                          </span>
                        </p>
                        <p>
                          <b>Timezone = {country.timezones[0]}</b>
                        </p>
                      </div>
                    </div>
                  );
                })
              : search.length > 0 && <h1>No Data Found</h1>}
          </div>
        </div>
      </div>
    </>
  );
};

export default CountrySearch;
