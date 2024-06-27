import React, { useEffect, useState } from 'react'
import './card2.css'
import axios from 'axios'
import { useSelector } from 'react-redux'

function Ccard2() {

  const cityName = useSelector((state) => state.counter.value);
  const [array , setArray] = useState([]) ;

  const fetchdata = async()=>{
    await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=e3da96cd3132153fc9bf6c6af1f92ce8`)
    .then(resp=>{
      console.log(resp.data) ;
      setArray(resp.data.list) ;
      console.log(array) ;
    })
    .catch(err=>{
      console.log(err) ;
    })
  }

  useEffect(()=>{
    fetchdata() ;
  },[]) ;


  const timeConvert = (timestamp) =>{
   
      timestamp *= 1000;
  
      
      let date = new Date(timestamp);
  
      const options = { weekday: 'short', day: '2-digit', month: 'short' };
      const redableDate = date.toLocaleDateString('en-GB', options);
return redableDate;
  }

  return (
    <div>
      <div className="forcastDays">
        <ul className='ulls'>
        <li className="day2 dayforcast grey"> <div className="ttempp"><img src="" alt="" className="img" /><span className='hello'>{Math.round(array[0]?.main.temp)} &#8451;</span></div> <div className="datee text">{timeConvert(array[0]?.dt)}</div><div className="daye text">img</div> </li>
        <li className="day2 dayforcast grey"> <div className="ttempp"><img src="" alt="" className="img" /><span className='hello'>{Math.round(array[8]?.main.temp)} &#8451;</span></div> <div className="datee text">{timeConvert(array[8]?.dt)}</div><div className="daye text">img</div> </li>
        <li className="day2 dayforcast grey"> <div className="ttempp"><img src="" alt="" className="img" /><span className='hello'>{Math.round(array[17]?.main.temp)} &#8451;</span></div> <div className="datee text">{timeConvert(array[15]?.dt)}</div><div className="daye text">img</div> </li>
        <li className="day2 dayforcast grey"> <div className="ttempp"><img src="" alt="" className="img" /><span className='hello'>{Math.round(array[26]?.main.temp)} &#8451;</span></div> <div className="datee text">{timeConvert(array[23]?.dt)}</div><div className="daye text">img</div> </li>
        <li className="day2 dayforcast grey"> <div className="ttempp"><img src="" alt="" className="img" /><span className='hello'>{Math.round(array[39]?.main.temp)} &#8451;</span></div> <div className="datee text">{timeConvert(array[31]?.dt)}</div><div className="daye text">img</div> </li>
        </ul>
      </div>
    </div>
  )
}

export default Ccard2
