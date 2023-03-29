import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/Navbar'
import ListStudents from './components/ListStudents'
import WeatherForm from "./components/weatherForm";
import WeatherCard from "./components/weatherCard";


function App() {


  const [city, setCity] = useState("");
  const [result, setResult] = useState(null);

  const loadCity = () => {
    fetch(`http://localhost:8080/weather?cityName=${city}`)
      .then((response) => response.json())
      .then((result) => {

        // pass data from child to component
        setResult(result);
        console.log(city);
        console.log(result);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loadCity();
  };

  return (
    <div className="App">
      <MyNavBar />
      <ListStudents />
  <WeatherForm setCity={setCity} handleSubmit={handleSubmit} />
      {!result ? (
        <p>Please click the botton to see Data</p>
      ) : (
        <WeatherCard data={result} />
      )}
    </div>
  )
}

export default App
