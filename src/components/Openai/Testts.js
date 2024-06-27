// import React from 'react'


// import { useState , useEffect } from 'react'
// import axios from 'axios';
// import { useDispatch } from 'react-redux';

// function Testts() {
//     const [tempp , setTemp] = useState() ;
//     const dispatch = useDispatch() ;

//     const fetchData = async() => {
//         try {
//          const res= await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=london&limit=5&appid=e3da96cd3132153fc9bf6c6af1f92ce8`);
//          console.log(res.data) ;
//          setTemp(res.data.main.temp);
    
//         } catch (error) {
//           console.log(error);
//         }
//       }

//       useEffect( ()=>{
   
//         fetchData() ;
      
//         } , []);


//         const updateTemp =()=>{
//             dispatch({
//                 type: "update" ,
//                 payload: tempp ,
//             })
//         }

//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Testts




//  api to get long and lat = http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid= e3da96cd3132153fc9bf6c6af1f92ce8

