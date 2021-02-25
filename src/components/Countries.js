import React, { useEffect, useState } from "React";
import axios from "axios";

import "../styles/Countries.css";

function Countries() {
    let [countries, setCountries] = useState([]);
    useEffect(() => { 
        if(!countries.length) {
            axios.get("https://restcountries.eu/rest/v2/all").then(res => {
                setCountries(res.data);
            });
        }
    }, [])
    
    return ( 
        <table>
            <thead><tr><th>Name</th><th>Capital</th></tr></thead>
            <tbody>
                {countries.map(country => <tr>
                    <td>{country.name}</td>
                    <td>{country.capital}</td>
                </tr>)}
            </tbody>
        </table>
    );
}

export default Countries;