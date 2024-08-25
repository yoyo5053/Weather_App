import { useState, useEffect } from 'react'
import './App.css'
import TopButtons from './components/TopButtons'
import Inputs from './components/Inputs'
import TimeAndLocation from './components/TimeAndLocation'
import TemperatureAndDetails from './components/TemperatureAndDetails'
import Forecast from './components/Forecast'
import getWeatherData from './services/weatherService'
import getFormattedWeatherData from './services/weatherService'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [units, setUnits] = useState("metric");
  const [city, setCity] = useState({q: 'London'});
  const [weatherData, setWeatherData] = useState(null);

/*  const updateCity = (city)=>{
    setCity({
      q : city
    })
  }*/

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const message = city.q ? city.q : 'current location.'
        toast.info('Fetching weather for ' + message)
        const data = await getFormattedWeatherData({...city,units});
        setWeatherData(data);
        toast.success(`Successfuly fetched weather for ${data.name}, ${data.country}.`)
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
    fetchWeather();
  }, [city,units]);

  if (!weatherData) {
    // Return a loading indicator while waiting for weather data
    return <div>Loading...</div>;
  }
  const {name, country, dt, timezone, details, icon, temp, feels_like, humidity, speed,
  sunrise,sunset, temp_max, temp_min, hourly, daily} = weatherData; 
  let classDiv = "mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br "

  if ((units == "metric" && temp >15) || (units == "imperial" && temp > 59) )
    {
    classDiv+="from-red-700 to-orange-500 h-fit shadow-xl shadow-gray-400"
    }else {classDiv+="from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400"}


  return (
   <div className={classDiv}>
    <TopButtons onChange={setCity}/>
    <Inputs onChange={setCity} onChange2={setUnits} units={units}/>
    <TimeAndLocation name={name} country={country} dt={dt} zone={timezone}/>
    <TemperatureAndDetails details={details} icon={icon} temp={temp} feels_like={feels_like} 
        humidity={humidity} speed={speed}
        sunrise={sunrise} sunset={sunset} temp_max={temp_max} temp_min={temp_min}
    />
    <Forecast title="hourly forecast" hourly={hourly}/>
    <Forecast title="daily forecast" hourly={daily}/>
    <ToastContainer autoClose={5000} theme='colored' newestOnTop={true}/>
   </div>
  )
}

export default App
