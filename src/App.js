import logo from './logo.svg';
import './App.css';

function App() {

const url = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=5df8784b76b421fabc90a1eaf2fac2be';

const searchLocation = (event) => {
  if(event.key === 'Enter'){
    
  }
}

  return (
    <div className='app'>
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <h2>Budapest</h2>
          </div>
          <div className='temp'>
            <h1>30°</h1>
          </div>
          <div className='description'>
            <h3>Clouds</h3>
          </div>
        </div>
        <div className='bottom'>
          <div className='feels'>
            <p>32°</p>
            <p>Feels Like</p>
          </div>
          <div className='humidity'>
            <p>20%</p>
            <p>Humidity</p>
          </div>
          <div className='wind'>
            <p>12km/h</p>
            <p>Wind speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
