import React from "react";
import { useState } from "react";
import Container  from "./Container";
import Form  from "./Form";
import { currencies } from "./currencies";
import Clock from "./Clock";

function App() {
  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies.find(({ shortName }) => shortName === currency).rate;

    setResult({
      toAmount: amount * rate,
      currency,
      rate,
    });
  };

  return (
    <Container>
      <Clock/>
      <Form
        result={result}
        calculateResult={calculateResult}
      />
    </Container>
  );
}

export default App;