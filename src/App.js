import logo from "./logo.svg";
import "./App.css";
import CountrySearch from "./components/CountrySearch";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/country" element={<CountrySearch />} />
      </Routes>
    </div>
  );
}

export default App;
