import React, { useEffect, useState, useRef, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
function App() {
  let days = { Yesterday: 'yesterday', 'Two Days Ago': 'twoDaysAgo' };
  const getInputValue = useRef();
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [error, renderError] = useState('');
  const [data, setData] = useState([]);
  const [param, setParam] = useState('yesterday');

  const getCaseDetails = useCallback(async () => {
    try {
      let response = await axios.get(
        `https://disease.sh/v3/covid-19/continents?${param}=${param}&sort=active`
      );
      console.log('The response', response);
      setData(response.data);
    } catch (err) {
      setError(true);
      console.log(err.message);
      renderError(err.message);
    }
  }, [param]);
  ///////////////////////////////
  const onChange = (e) => {
    e.preventDefault();
    const refValue = getInputValue.current.value;
    console.log('Submitted', refValue);
    setParam(refValue);
  };
  //////////////////////////////////

  const dayMap = Object.keys(days).map((key) => {
    return (
      <option value={days[key]} key={uuidv4()}>
        {key}
      </option>
    );
  });

  //////////////////////////////////

  useEffect(() => {
    getCaseDetails();
    setLoading(false);
  }, [getCaseDetails]);

  if (Boolean(isError)) {
    return <>Oops! That's an error : {error}</>;
  } else if (Boolean(isLoading)) {
    return <>Loading...</>;
  } else {
    return (
      <>
        {data.map((item) => (
          <li key={uuidv4()}>
            ActiveCases: {item.active} in {item.continent}
          </li>
        ))}
        <select onChange={onChange} ref={getInputValue}>
          {dayMap}
        </select>
      </>
    );
  }
}

export default App;
