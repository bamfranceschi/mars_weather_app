import axios from "axios";
import React, { useEffect, useState } from "react";

interface WeatherData {
  sol: number;
  temperature: {
    min: number;
    max: number;
    average: number;
  };
  pressure: {
    min: number;
    max: number;
    average: number;
  };
  windSpeed: {
    min: number;
    max: number;
    average: number;
  };
}

interface NasaWeatherObject {
  AT: {
    av: number;
    ct: number;
    mn: number;
    mx: number;
  };
  PRE: {
    av: number;
    ct: number;
    mn: number;
    mx: number;
  };
  HWS: {
    av: number;
    ct: number;
    mn: number;
    mx: number;
  };
}

interface WeatherDataResponse {
  sol_keys: string[];
  [key: number]: NasaWeatherObject;
}

function weatherArray(data: WeatherDataResponse): Array<WeatherData> {
  // sol_keys is an index into the weather data
  // each sol_key points to a object containing properties such as AT, WD, etc

  // this function uses the sol_key index to lookup the weather data for that sol key
  // and returns the resulting object from the map call
  return data.sol_keys.map(key => {
    // a sol_key is a string, we need to convert to a number for lookup
    const sol = parseInt(key);
    const d = data[sol];

    // this is a WeatherData object
    return {
      sol,
      temperature: {
        min: d.AT.mn,
        max: d.AT.mx,
        average: d.AT.av
      },
      pressure: {
        min: d.PRE.mn,
        max: d.PRE.mx,
        average: d.PRE.av
      },
      windSpeed: {
        min: d.HWS.mn,
        max: d.HWS.mx,
        average: d.HWS.av
      }
    };
  });
}

const WeatherContainer: React.FC = () => {
  const [weatherData, setWeatherData] = useState<Array<WeatherData>>([]);

  useEffect(
    () => {
      axios
        .get(
          "https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0"
        )
        .then(response => {
          console.log(response);
          return response;
        })
        .then(({ data }) => weatherArray(data))
        .then(arr => setWeatherData(arr));
    },
    [
      /* runs once on component load */
    ]
  );

  if (weatherData && weatherData.length > 0) {
    console.log(weatherData);
  }
  return <div>WeatherContainer</div>;
};

export default WeatherContainer;
