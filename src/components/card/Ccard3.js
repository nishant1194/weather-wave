import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./card3.css";
import { useSelector } from "react-redux";
import aqiIcon from '../../assests/images/wind.png'
import pressureIcon from '../../assests/images/icons8-air-instrumentation-96.png'
import humIcon from '../../assests/images//icons8-drop-48.png'
import feelIcon from '../../assests/images/icons8-dew-point-48.png'
import visIcon from '../../assests/images/icons8-eye-30.png'


function Ccard3() {
  const cityName = useSelector((state) => state.counter.value);
  const [lat, setLat] = useState();
  const [long, setLong] = useState();

  const [deg, setdeg] = useState();
  const [speed, setspeed] = useState();


  const [humidity, setHumidity] = useState();
  const [pressure, setPressure] = useState();
  const [visibility, setVisibility] = useState();
  const [feelsLike, setfeelsLike] = useState();
  const [SunriseH, setSunriseH] = useState();
  const [SunsetH, setSunsetH] = useState();

  const fetchCondition = async () => {
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=e3da96cd3132153fc9bf6c6af1f92ce8`
      )
      .then((res) => {
        setHumidity(res.data.main.humidity);
        setPressure(res.data.main.pressure);
        setfeelsLike(res.data.main.feels_like);
        setVisibility(res.data.visibility);
        timeConvert(res.data.sys.sunrise, res.data.sys.sunset);
        setLat(res.data.coord.lat);
        setLong(res.data.coord.lon);
        setdeg(res.data.wind.deg)
        setspeed(res.data.wind.speed)
      })
      .catch((error) => {
        console.log(error);
      });
  };



  useEffect(() => {
    fetchCondition();
  }, [cityName]);

  const timeConvert = (sunriseTimestamp, sunsetTimestamp) => {
    sunriseTimestamp *= 1000;
    sunsetTimestamp *= 1000;

    // Create a new Date object
    let sunriseDate = new Date(sunriseTimestamp);
    let sunsetDate = new Date(sunsetTimestamp);

    // Get the readable time string
    let options = { hour: "2-digit", minute: "2-digit", hour12: true };
    let sunriseTime = sunriseDate.toLocaleTimeString("en-GB", options);
    let sunsetTime = sunsetDate.toLocaleTimeString("en-GB", options);

    setSunriseH(sunriseTime);
    setSunsetH(sunsetTime);
  };

  return (
    <div>
      <div className="card3">
        <div className="highlight">Today's Highlight</div>
        <div className="boxes2">
          <div className="box1">
            <div className="textt"> Wind</div>
            <div className="aixBox">
              <div className="airComponents ">
                <img className="text image" src={aqiIcon}/>
              </div>

              <div className="airComponents">
                <div className="text">degree</div>
                <h3>{deg}</h3>
              </div>
              <div className="airComponents">
                <div className="text">Speed</div>
                <h3>{speed}</h3>
              </div>
             
            </div>
          </div>
          <div className="box1">
            <div className="textt">Sunrise & Sunset</div>
            <div className="aixBox">
              <div className="airComponents">
                <div className="text">Sunrise</div>
                <h3>{SunriseH}</h3>
              </div>
              <div className="airComponents">
                <div className="text">Sunset</div>
                <h3>{SunsetH}</h3>
              </div>
            </div>
          </div>
          
        </div>
        <div className="box11">
          <div className="aixBoxx">
            <div className="airComponentss">
              <div className="text">Humidity</div>
              <div className="otherFactor">
              <img className="humidityy" src={humIcon}/>
              <h2 className="humidity">{humidity}%</h2>
              </div>
            </div>
            <div className="airComponentss">
              <div className="text">Pressure</div>
              <div className="otherFactor">
              <img className="feellikeIcon" src={pressureIcon}/>
                <h3 className="humidity">{pressure}hPa</h3>
              </div>
            </div>
            <div className="airComponentss">
              <div className="text">Visibility</div>
              <div className="otherFactor">
              <img className="feellikeIcon" src={visIcon}/>
                <h3 className="humidity">{visibility / 100}km</h3>
              </div>
            </div>
            <div className="airComponentss">
              <div className="text">Feels Like</div>
              <div className="otherFactor">
              <img className="feellikeIcon" src={feelIcon}/>
               <h3 className="humidity">{Math.round(feelsLike)} &#8451;</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ccard3;
