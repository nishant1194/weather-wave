import React from "react";
import "./card.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import WeatherIcon from 'react-icons-weather';


function Ccard(props) {
  const cityName = useSelector((state) => state.counter.value);
  const [city , setCity] = useState('') ;
  const [Temp , setTemp] = useState() ;
  const [country , setCountry] = useState('') ;
  const [cloud , setCloud] = useState('') ;
  const [readableDate, setReadableDate] = useState('') ;
  const [icon, setIcon] = useState('') ;


  const getDate =(timestamp) =>{
  timestamp *= 1000;

// Create a new Date object
const date = new Date(timestamp);

// Format the date to "Day, DD Mon"
const options = { weekday: 'long', day: '2-digit', month: 'long' };
 const redableDate = date.toLocaleDateString('en-GB', options);
 setReadableDate(redableDate);
  }

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=e3da96cd3132153fc9bf6c6af1f92ce8`
      )
      .then((resp) => {
        console.log(resp.data);
        setTemp(resp.data.main.temp);
        setCloud(resp.data.weather[0].main);
        setCity(resp.data.name) ;
        setCountry(resp.data.sys.country) ;
        getDate(resp.data.dt) ;
        setIcon(resp.data.weather[0].icon)
      });
  };

  return (
    <div>
      <div className="card1">
        <div className="now">Now</div>
        <div className="temp">
          <span className="grey"> {Math.round(Temp)} &#8451; </span>
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} style={{color:'white' , backgroundColor:" rgb(30,30,32)"}}></img>

      </div>
        <div className="sky grey">{cloud}</div>
        <div className="line"></div>

        <div className="dateDay grey">
          {" "}
          <span className="day grey">{readableDate}</span>
        </div>
        <div className="location grey">
          {city}, {country}
        </div>
      </div>
    </div>
  );
}

export default Ccard;
