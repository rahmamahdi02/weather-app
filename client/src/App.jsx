import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import MyNavBar from './components/Navbar'
import WeatherForm from "./components/weatherForm";
import WeatherCard from "./components/weatherCard";
import { Modal, Button } from "react-bootstrap";
import ListStudents from './components/ListStudents';

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

  const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);


  return (
    <div classNameNameName="App">
      <MyNavBar />


<Button variant="primary" onClick={handleShow}>
  click modal
</Button>

<Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Modal heading</Modal.Title>
  </Modal.Header>
  <Modal.Body>Hello,you're reading this text in a modal!</Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
      Close
    </Button>
    <Button variant="primary" onClick={handleClose}>
      Save Changes
    </Button>
  </Modal.Footer>
</Modal>




  <WeatherForm setCity={setCity} handleSubmit={handleSubmit} />
      {!result ? (
        <p>Please click the botton to see Data</p>
      ) : (
        <WeatherCard data={result} />
      )}

<ListStudents />

    </div>
  )
}

export default App
