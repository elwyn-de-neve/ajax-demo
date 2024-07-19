import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  async function fetchData() {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      setCountries();
    } catch (err) {
      console.error(err);
    }
  }
  return <></>;
}

export default App;
