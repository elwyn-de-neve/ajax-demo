import "./App.css";
import axios from "axios";

function App() {
  async function fetchData() {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
    } catch (err) {}
  }
  return <></>;
}

export default App;
