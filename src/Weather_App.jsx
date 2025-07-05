import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./searchBox";

export default function weatherApp(){
    let [weatherInfo,setWeatherInfo]=useState({
        city:"Banglore",
        feels_like:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:40,
        weather:"haze"
    })
    let updateInfo=(result)=>{
        setWeatherInfo(result)

    }
    return(
        <div>
            <h1>Weather Data by Thanvith</h1>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
        </div> 
    );
}