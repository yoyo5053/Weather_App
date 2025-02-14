import React from 'react'
import { iconUrlFromCode } from '../services/weatherService';
import { formatToLocalTime } from '../services/weatherService'
import {
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
} from "@iconscout/react-unicons";
function TemperatureAndDetails(props) {
  return (
    <div >
        <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
            <p>{props.details}</p>
        </div>
        
        <div className="flex flex-row items-center justify-between text-white py-3">
            <img src={iconUrlFromCode(props.icon)} alt="" className="w-20"/>
            <p className="text-5xl">{props.temp.toFixed()}°</p>
            <div className="flex flex-col space-y-2">
                <div className="flex font-light text-sm items-center justify-center">
                    <UilTemperature size={18} className="mr-1"/>
                    Real fell: 
                    <span className="font-medium ml-1">{props.feels_like.toFixed()}°</span>
                </div>
                <div className="flex font-light text-sm items-center justify-center">
                    <UilTear size={18} className="mr-1"/>
                    Humidity: 
                    <span className="font-medium ml-1">{props.humidity}%</span>
                </div>
                <div className="flex font-light text-sm items-center justify-center">
                    <UilWind size={18} className="mr-1"/>
                    Wind: 
                    <span className="font-medium ml-1">{props.speed.toFixed()} km/h</span>
                </div>
            </div>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
            <UilSun/>
            <p className="font-light">Rise:<span className="font-medium ml-1">{formatToLocalTime(props.sunrise, props.timezone, "hh:mm a")}</span></p>
            <p className="font-light">|</p>

            <UilSunset/>
            <p className="font-light">Set:<span className="font-medium ml-1">{formatToLocalTime(props.sunset, props.timezone, "hh:mm a")}</span></p>
            <p className="font-light">|</p>

            <UilArrowUp/>
            <p className="font-light">High:<span className="font-medium ml-1">{props.temp_max.toFixed()}°</span></p>
            <p className="font-light">|</p>

            <UilArrowDown/>
            <p className="font-light">Low:<span className="font-medium ml-1">{props.temp_min.toFixed()}°</span></p>
            <p className="font-light">|</p>
        </div>
    </div>
  )
}

export default TemperatureAndDetails