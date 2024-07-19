import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  async function fetchData() {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      setCountries(response.data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect();
  return <></>;
}

export default App;
