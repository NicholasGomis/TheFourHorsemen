import React from 'react'

export function Info({currency, carSide, capital, continent, population, language, timeZone}) {
    

    return (

        <div>
            <div className='box'>
            <h4>Currency</h4>
            <h4>{currency}</h4>
            </div>
            
            <div className='box'>
            <h4>Car Side</h4>
            <h4>{carSide}</h4>
            </div>
           
            <div className='box'>
            <h4>capital</h4>
            <h4>{capital}</h4>
            </div>

             <div className='box'>
            <h4>continent</h4>
            <h4>{continent}</h4>
            </div>
            
             <div className='box'>
            <h4>population</h4>
            <h4>{population}</h4>
            </div>
            
             <div className='box'>
            <h4>language</h4>
            <h4>{language}</h4>
            </div>

            <div className='box'>
            <h4>Time zone</h4>
            <h4>{timeZone}</h4>
            </div>


            
        </div>
    )
}
