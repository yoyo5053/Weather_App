import React, {useState} from 'react'
import { UilSearch,UilLocationPoint } from '@iconscout/react-unicons'
import { toast } from 'react-toastify';
function Inputs({onChange, onChange2}) {

  const [tempInput, setTempInput, units] = useState('');

  const handleInputChange = (e) => {
    setTempInput(e.target.value); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onChange({q: tempInput}); 
  };

  const handleUnits = (e) =>{
   if(units!== e.target.name) onChange2(e.target.name)
  };
  const handleLocationClick=  () =>{
    if(navigator.geolocation){
      toast.info('Fetching user location.')
      navigator.geolocation.getCurrentPosition((position)=>{
        toast.success("Location fetched!")
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        onChange({
          lat,
          lon,
        });
      })
    };
  }
  return (
    <div className="flex flex-row justify-center my-6">
        <form onSubmit={handleSubmit} className="flex flex-row w-3/4 items-center justify-center space-x-3">
            <input
                type="text"
                placeholder="search for city..."
                onChange={handleInputChange}
                className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
            />
            <UilSearch onClick={handleSubmit} size={25} className="text-white cursor-pointer transition ease-out hover:scale-125"/>
            <UilLocationPoint onClick={handleLocationClick} size={25} className="text-white cursor-pointer transition ease-out hover:scale-125"/>
        </form>
        <div className="flex flex-row w-1/4 items-center justify-center">
            <button name="metric" className="text-xl text-white font-light hover:scale-125" onClick={handleUnits}>°C</button>
            <p className="text-xl text-white mx-1">|</p>
            <button name="imperial" className="text-xl text-white font-light hover:scale-125" onClick={handleUnits}>°F</button>
        </div>
    </div>
  )
}

export default Inputs