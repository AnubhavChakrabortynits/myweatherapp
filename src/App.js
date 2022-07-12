
import './App.css';
import { useState ,useEffect} from 'react';
import axios from 'axios';
function App() {
const [data,setData]=useState()
const [location,setLocation]=useState('')

useEffect(()=>{
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=b6b546e0642e56a001d2cbb723109e08`).then((response)=>{
    setData(response.data);
    console.log(response.data);
  })
},[])
const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=b6b546e0642e56a001d2cbb723109e08`


const searchLocation=(e)=>{
if(e.key==='Enter'){
  {
axios.get(url).then((response)=>{
  setData(response.data);
  console.log(response.data);
})
  }
}
}
  return (
   
    <div className="app">
    <div className='wrapsearch'>
    <input value={location} onChange={(e)=>setLocation(e.target.value)} type="text" placeholder='search location' onKeyDown={searchLocation}/>


    </div>
    <div className="container">
        <div className="top">
<div className="location">
 <h2><strong id="name">{data?data.name:"Waiting for results"}</strong></h2>
</div>


<div className="temp">
  <h1>{((data?.main?.temp)+(-273.15)).toFixed(2)}&deg;C</h1>
</div>
<div className="description">
  <h3>{data?.weather ?data.weather[0].description:"No Description"}</h3>
</div>

        </div>

        <div className="tempwrap">
<div className="min">
<strong>Min-Temperature<br/>{(data?.main?.temp_min+(-273.15)).toFixed(2)}</strong>
</div>
<div className="max">
<strong>Min-Temperature<br/>{(data?.main?.temp_max+(-273.15)).toFixed(2)}</strong>
</div>


</div>
        <div className="bottom">

        {((data?.main?.temp)+(-273.15)).toFixed(2)}
        <div className="feels">
          <strong>FEELS LIKE <br/>{(data?.main?.feels_like + (-273.15)).toFixed(2)}&deg;C</strong>
        </div>
<div className="humidity">
<strong>HUMIDITY<br/>{data?.main?.humidity}%</strong>
</div>
<div className="wind">
  <strong>WIND<br/>{data?.wind?.speed}MPH</strong>
</div>

        </div>
      </div>
      </div>

  );
}

export default App;
