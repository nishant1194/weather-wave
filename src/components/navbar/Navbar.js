import React, { useState } from 'react'
import '../navbar/Navbarr.css'
import { useSelector, useDispatch } from 'react-redux';
import { updateString } from '../../redux/slices/inputSlice';
import mainImg from '../../assests/images/4102326_cloud_sun_sunny_weather_icon.png'

function Navbar() {

  const dispatch = useDispatch();

  const [city , setCity] = useState("Delhi") ;
  
  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted city:', city);
  };

 
  return (
    <div className='navvv'>
      <div className="wheatherWave">
        <img src={mainImg} alt='...' className="weatherWaveIcon" />
        <div className="weatherWaveText">WeatherWave</div>
      </div>
      
      <form onSubmit={handleSubmit} className='searchBar'>
      <input
        type="text"
        className="searchText"
        value={city}
        onChange={handleInputChange}
        placeholder="Enter city name"
      />
      <button type="submit" className="submitt" 
                onClick={() => dispatch(updateString(city))}
>Submit</button>
    </form>
      <div className="aboutMe"> About Me</div>
    </div>
  )

}




export default Navbar


