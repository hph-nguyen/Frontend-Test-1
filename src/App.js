import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Weather from "./components/weather/Weather";
import WeatherCard from "./components/weather/WeatherCard";

function App() {
  return (
    <div>
      <Navbar />

      {/* <Weather /> */}
      <WeatherCard />
    </div>
  );
}

export default App;
