const WeatherCard = ({ data }) => {
    return (
      <div className="weather-card">
        <div className="result">
          <p>
            City:{" "}
            <span className="data">
              {data.name}, {data.sys.country}
            </span>
          </p>
          <p>
            Description:{" "}
            <span className="data">{data.weather[0].description}</span>
          </p>
          <img
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
            alt={"Icon from Open Weather Api"}
          />
          <p>
            Temperature:{" "}
            <span className="data">
              {data.main.temp} <sup>o</sup>F
            </span>
          </p>
          <p>
            Feels Like:{" "}
            <span className="data">
              {data.main.feels_like} <sup>o</sup>F
            </span>
          </p>
  
          <p>
            Pressure:{" "}
            <span className="data">
              {data.main.pressure} hPa
            </span>
          </p>
  
          <p>
            Humidity Levels:{" "}
            <span className="data">
              {data.main.humidity} %
            </span>
          </p>
  
        </div>
      </div>
    );
  };
  
  export default WeatherCard;
  