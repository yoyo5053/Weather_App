import React from 'react'
import { iconUrlFromCode } from '../services/weatherService';

function Forecast({title,hourly}) {
  return (
    <div>
    <div className="flex items-center justify-start mt-6">
        <p className="text-white font-medium uppercase">{title}</p>
    </div>
    <hr className="my-2"></hr>
    <div className="flex flex-row items-center justify-between text-white">
        {hourly &&  hourly.map((h, index)=>{
        return(
        <div key={index} className="felx flex-col items-center justify-center">
            <p className="font-light text-sm">
            {h.title}
            </p>
            <img
                src={iconUrlFromCode(h.icon)}
                className="w-12 my-1"
                alt=""
            />
            <p className="font-medium">{h.temp && h.temp.toFixed()}°</p>
        </div>
        )
        
        })}
    </div>
    </div>
  )
}

export default Forecast