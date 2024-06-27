import React, { useState, useEffect } from "react";
import "./cardd4.css";
import axios from "axios";
import { useSelector } from "react-redux";

function Card4() {
  const cityName = useSelector((state) => state.counter.value);
  const [array, setArray] = useState([]);

  const fetchdata = async () => {
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=e3da96cd3132153fc9bf6c6af1f92ce8`
      )
      .then((resp) => {
        console.log(resp.data);
        setArray(resp.data.list);
        console.log(array);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchdata();
  }, [cityName]);

  const timeConvert = (timestamp) => {
    timestamp *= 1000;

    let date = new Date(timestamp);

    let options = { hour: "2-digit", hour12: true };
    const redableDate = date.toLocaleTimeString("en-GB", options);
    return redableDate;
  };

  const dateConvert = (timestamp) => {
    timestamp *= 1000;

    let date = new Date(timestamp);

    let options = { date: "2-digit", hour12: true };
    const redableDate = date.toLocaleDateString("en-GB", options);
    return redableDate.slice(0,2);
  };


  const today = (date)=>{
    const todayDate = new Date() ;
    if(todayDate.getDate()==date) return "Today" 
    return "Tommorow" ;
  }
  return (
    <div>
      <div className="foreecastt">
        
        <div className="weat">
        <div className=" text">{today(dateConvert(array[0]?.dt))}</div>
        <div className="tame">{timeConvert(array[0]?.dt)}</div>
        <img src={`http://openweathermap.org/img/wn/${array[0]?.weather[0].icon}@2x.png`} style={{backgroundColor:" rgb(30,30,32)"}}></img>
        <div className="text">{array[0]?.main.temp} &#8451; </div>
        </div>{" "}
        <div className="weat">
        <div className=" text">{today(dateConvert(array[1]?.dt))}</div>

          <div className="tame">{timeConvert(array[1]?.dt)}</div>
          <img src={`http://openweathermap.org/img/wn/${array[1]?.weather[0].icon}@2x.png`} style={{backgroundColor:" rgb(30,30,32)"}}></img>
          <div className="text">{array[1]?.main.temp} &#8451; </div>
        </div>{" "}
        <div className="weat">
        <div className=" text">{today((array[2]?.dt_txt)?.slice(8,10))}</div>

          <div className="tame">{timeConvert(array[2]?.dt)}</div>
          <img src={`http://openweathermap.org/img/wn/${array[2]?.weather[0].icon}@2x.png`} style={{backgroundColor:" rgb(30,30,32)"}}></img>
          <div className="text">{array[2]?.main.temp} &#8451; </div>
        </div>{" "}
        <div className="weat">
        <div className=" text">{today((array[3]?.dt_txt)?.slice(8,10))}</div>

          <div className="tame">{timeConvert(array[3]?.dt)}</div>
          <img src={`http://openweathermap.org/img/wn/${array[3]?.weather[0].icon}@2x.png`} style={{backgroundColor:" rgb(30,30,32)"}}></img>
          <div className="text">{array[3]?.main.temp} &#8451; </div>
        </div>{" "}
        <div className="weat">
        <div className=" text">{today((array[4]?.dt_txt)?.slice(8,10))}</div>

          <div className="tame">{timeConvert(array[4]?.dt)}</div>
          <img src={`http://openweathermap.org/img/wn/${array[4]?.weather[0].icon}@2x.png`} style={{backgroundColor:" rgb(30,30,32)"}}></img>
          <div className="text">{array[4]?.main.temp} &#8451; </div>
        </div>
        <div className="weat">
        <div className=" text">{today((array[5]?.dt_txt)?.slice(8,10))}</div>

          <div className="tame">{timeConvert(array[5]?.dt)}</div>
          <img src={`http://openweathermap.org/img/wn/${array[5]?.weather[0].icon}@2x.png`} style={{backgroundColor:" rgb(30,30,32)"}}></img>
          <div className="text">{array[5]?.main.temp} &#8451; </div>
        </div>{" "}
        <div className="weat">
        <div className=" text">{today((array[6]?.dt_txt)?.slice(8,10))}</div>

          <div className="tame">{timeConvert(array[6]?.dt)}</div>
          <img src={`http://openweathermap.org/img/wn/${array[6]?.weather[0].icon}@2x.png`} style={{backgroundColor:" rgb(30,30,32)"}}></img>
          <div className="text">{array[6]?.main.temp} &#8451; </div>
        </div>
      </div>
    </div>
  );
}

export default Card4;
