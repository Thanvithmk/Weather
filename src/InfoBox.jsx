import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./card.css"

export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1731737049505-762518bb6e3d?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return(
        <div className="InfoBox">
            <h2>Weather information</h2>
             <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        sx={{ height: 150 }}
        image={INIT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
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