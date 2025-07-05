import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
import "./card.css"

export default function InfoBox({info}){
    const hot_url="https://media.istockphoto.com/id/1410976365/photo/woman-suffering-from-heat-wave.jpg?s=612x612&w=0&k=20&c=90gobf2VeODfmSQEZpkQNKCNxVVLI6oal4BfuMqDUlQ="
    const cold_url="https://plus.unsplash.com/premium_photo-1664301524345-90a694774519?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
    const rain_url="https://tse2.mm.bing.net/th/id/OIP.5fI8VxCcsJoQ2QL5stbS-gHaEJ?pid=Api&P=0&h=180"
    const getImage = () => {
        if (info.humidity > 80) return rain_url;
        else if (info.temp > 17) return hot_url;
        else return cold_url;
    };
    const getIcon = () => {
        if (info.humidity > 80) return <ThunderstormIcon/>;
        else if (info.temp > 17) return <SunnyIcon/>;
        else return <AcUnitIcon/>;
    };
    return(
        <div className="InfoBox">
            <h2>Weather information</h2>
             <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        sx={{ height: 150 }}
        image={getImage()}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {getIcon()}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <div className='card_cont'>
            <p>Temperature : {info.temp}</p>
            <p>Humidity : {info.humidity}</p>
            <p>Min Temp : {info.temp_min}</p>
            <p>Max Temp : {info.temp_max}</p>
            <p>Feels like : {info.feelsLike}</p>
            <p>Weather can be described as {info.weather}</p>
          </div>
        </Typography>
      </CardContent>
    </Card>
        </div>
    )
}