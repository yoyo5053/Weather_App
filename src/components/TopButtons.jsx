import React from 'react'

export default function TopButtons({onChange}) {
    const cities = [
        { id : 1,
          title : "London"  
        },
        { id : 5,
          title : "Tokyo"  
        },
        { id : 2,
          title : "Paris"  
        },
        { id : 3,
          title : "Madrid"  
        },
        { id : 4,
          title : "Rabat"  
        }
    ]
  return (
    <div className="flex items-center justify-around my-6">
        {cities.map((city)=>(
            <button key={city.id} name={city.title} onClick={(e)=>onChange({q: e.target.name})} className="text-white text-lg font-medium">{city.title}</button>
        ))}
    </div>
  )
}
