import React, { useEffect, useState } from "react";
const CountryCard = ({ country }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid black",
        borderRadius: "5px",
        margin: "10px",
        height: "200px",
        width: "200px",
      }}
    >
      <img
        src={country.flag}
        alt={country.abbr}
        style={{
          paddingTop: 20,
          width: "120px",
          height: "320px",
        }}
      />
      <h3>{country.name}</h3>
    </div>
  );
};

function Countries() {
  const API_ENDPOINT = "https://xcountries-backend.azurewebsites.net/all";

  const [flagData, setFlagData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(API_ENDPOINT);
        const jsonData = await data.json();
        setFlagData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {flagData.map((country) => (
        <CountryCard key={country.abbr} country={country} />
      ))}
    </div>
  );
}
export default Countries;
