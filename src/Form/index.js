import React from "react";
import { useState } from "react";
import { currencies } from "../currencies";
import "./style.css";
import ResultRate from "./ResultRate";
import ResultAmount from "./ResultAmount";

const Form = ({ result, calculateResult }) => {
  const [currency, setCurrency] = useState(currencies[0].shortName);
  const [amount, setAmount] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };



  return (

    <form className="container" onSubmit={onFormSubmit}>
      <fieldset className="form__fieldset">
        <legend className="form__legend">Kalkulator walutowy</legend>
        <p>
          <label>
            <span className="form__labelText">
              Wpisz kwotę*:
            </span>
            <input
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              className="form__labelField"
              type="number"
              name="amount"
              placeholder="Wpisz kwotę w PLN"
              step="any"
              min="1"
              autoFocus
              required
            />
          </label>
        </p>
        <p>
          <label>
            <span className="form__labelText">
              Waluta:
            </span>
            <select
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
              className="form__labelField form__labelField--shorter"
              name="currency"
            >
              {currencies.map(currency => (
                <option
                  key={currency.shortName}
                  value={currency.shortName}
                >
                  {currency.name}
                </option>
              ))}
            </select>
          </label>
        </p>
        <p className="form__paragraph--centered">
          Aktualny kurs:
          <ResultRate result={result} />
        </p>
        <button className="form__button">Przelicz</button>
        <p className="result__name">
          Twoja krota wynosi:
          <ResultAmount result={result} />
        </p>
        <p className="form__paragraph--fontSmall">Pola wymagane oznaczone są *</p>
      </fieldset>
    </form>

  );
};

export default Form;