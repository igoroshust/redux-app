import * as React from "react";
import axios from "axios";
import "../styles/Countries.css";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Country from "./Country";

function Countries() {
    const [countries, setCountries] = React.useState([]);

    let currency = {"code":"USD", "name":"United State Dollar", "symbol":"$"}
    type CurrencyType = {
        code: string
        name: string
        symbol: string
    }

    /* Создаём кастомный тип */
    type CountryType = {
        name: any
        capital: string
        alpha3Code: string
        currencies: Array<CurrencyType>
    }

    type ResType = {
        data: Array<object>
    }

     /* Присылаем страны, если их ещё не было */
    if(!countries.length) {
            /* Получение списка стран */
    axios.get("https://restcountries.com/v3.1/all").then((res: ResType) => {
        /* по .then получаем ответ (res - response) */
        console.log(res);
        setCountries(res.data);
    })
    }
    return (
        <Table striped bordered hover className={"countries"}>
            <thead><tr><th>Name</th><th>Capital</th><th>Action</th></tr></thead>
            <tbody>
                {countries.map((country : CountryType) => country.capital ? <Country key={country.alpha3Code} name={country.name.common} capital={country.capital} /> :
                 <Country key={country.alpha3Code} name={country.name.common} />)}
            </tbody>
        </Table>
    )
}

export default Countries;