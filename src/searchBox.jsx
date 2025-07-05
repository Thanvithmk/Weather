import * as React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searchbox.css"
export default function SearchBox({updateInfo}){
    let[city,setCity]=useState("");
    let [error,setError]=useState(false)
    let API_url="https://api.openweathermap.org/data/2.5/weather";
    const API_key="6c31bc94c19bd98c770de227c61939cc";

    let getWeatherinfo=async()=>{
       try{
        let response= await fetch(`${API_url}?q=${city}&appid=${API_key}&units=metric`);
       let json_resp=await response.json();
       let result={
        city:city,
        temp:json_resp.main.temp,
        temp_min:json_resp.main.temp_min,
        temp_max:json_resp.main.temp_max,
        humidity:json_resp.main.humidity,
        feelsLike:json_resp.main.feels_like,
        weather:json_resp.weather[0].description
       };
       console.log(result);
       return result;
       }catch(error){
        throw error;
       }
    }
  
    let handleChange=(evt)=>{
        setCity(evt.target.value);
    }
    let handleSubmit=async(event)=>{
        try{
            event.preventDefault();
        console.log(city)
        setCity("");
        let newinfo=await getWeatherinfo();
        updateInfo(newinfo);
        }catch(err){
            setError(true)
        }
        
    }
    
    return(
        <div className="searchbox">
        <form onSubmit={handleSubmit}>
             <TextField id="city" label="City name" variant="outlined"  onChange={handleChange} value={city} required /><br/><br/>
             <Button variant='contained' type="submit" >Search</Button>
                {error && <p style={{color : "red"}}>No such place found</p>}
        </form>
        </div>
    )
}