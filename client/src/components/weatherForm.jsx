const WeatherForm = ({ setCity, handleSubmit }) => {
    function onChange(e) {
      setCity(e.target.value);
    }
  
      return (
          <div className="weather">
          <h1 className="App-header">Techtonica Weather Forecast App</h1>
          <form onSubmit={handleSubmit}>
            <input
              id="city-name"
              type="text"
              placeholder="Please enter the city name"
              name="city"
              onChange={onChange}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      )
  }
  
  export default WeatherForm;