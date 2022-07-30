import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState("");

  function getWeather() {
    const options = {
      method: "GET",
      url: "https://yahoo-weather5.p.rapidapi.com/weather",
      params: { location: "Auckland", format: "json", u: "f" },
      headers: {
        "X-RapidAPI-Key": "d03a330856msh09166d75f159fcbp1934d1jsn26c60dd2051d",
        "X-RapidAPI-Host": "yahoo-weather5.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  return (
    <div className="App">
      <h1 className="text-5xl">Hello world!</h1>
      <label className="bg-red-600" htmlFor="nameInput">
        {" "}
        Name:
      </label>
      <input type="text" id="nameInput" placeholder="John" />
    </div>
  );
}

export default App;
