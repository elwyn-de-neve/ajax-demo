import "./App.css";
import axios from "axios";

function App() {
  async function fetchData() {
    const response = await axios.get("https://restcountries.com/v3.1/all");
  }
  return <></>;
}

export default App;
