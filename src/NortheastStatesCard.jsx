import { useState, useEffect } from 'react';
import useFetchData from "./useFetchData"

function Northeast ({ records }){
const northeastList = [
        "Connecticut", "Delaware", "Maine", "Maryland", "Massachusetts", 
        "New Hampshire", "New Jersey", "New York", "Pennsylvania", "Rhode Island", "Vermont"
]

const northeastRecords = records.filter(state => northeastList.includes(state["State Name"]));
const northeastSections = northeastRecords.map(state => ( 
    <div className="state-card">
        <h2>{state["State Name"]}</h2>
        <p>Capital: {state.Capital}</p>
        <p>Code Name: {state["Code Name"]}</p>
        <p>Nickname: {state.Nickname}</p>
        <img src={state.Image} alt={`Map of ${state["State Name"]}`} />
    </div>
))
console.log(northeastRecords)


    return(
        <article className='NE'>
            <h1>NorthEast States</h1>
            <div className='Northeast-grid'>
            {northeastSections}    
            </div>
        </article>
    
    )
        
    
}

export default Northeast