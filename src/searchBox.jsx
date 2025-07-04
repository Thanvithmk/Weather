import * as React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searchbox.css"
export default function SearchBox(){
    let[city,setCity]=useState("");
    let handleChange=(evt)=>{
        setCity(evt.target.value);
    }
    let handleSubmit=(event)=>{
        event.preventDefault();
        setCity("");
    }
    return(
        <div class="searchbox">
        <form>
             <TextField id="city" label="City name" variant="outlined"  onChange={handleChange} value={city} required /><br/><br/>
             <Button variant='contained' type="submit"onSubmit={handleSubmit} >Search</Button>
        </form>
        </div>
    )
}