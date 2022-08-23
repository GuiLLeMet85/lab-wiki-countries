// src/App.js
import "./App.css";
import "./index.css"
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountriesDetails from "./components/CountryDetails";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return <div className="App">

    <div>
      <Navbar />
      <div class="container">
        <div class="row">
      <CountriesList />
    </div>
      <CountriesDetails />
    </div>;
    </div>
    </div>
}
export default App;