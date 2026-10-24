function West ({records}){

    const westList = [
        "Alaska","California","Colorado","Hawaii","Idaho",
        "Montana","Nevada","Oregon","Utah","Washington","Wyoming" 
]

const westRecords = records.filter(state => westList.includes(state["State Name"]));
const westSections = westRecords.map(state => ( 
    <div className="state-card">
        <h2>{state["State Name"]}</h2>
        <p>Capital: {state.Capital}</p>
        <p>Code Name: {state["Code Name"]}</p>
        <p>Nickname: {state.Nickname}</p>
        <img src={state.Image} alt={`Map of ${state["State Name"]}`} />
    </div>
))
console.log(westRecords)


    return(
        <article className='WEST'>
            <h1>West States</h1>
            <div className='West-grid'>
            {westSections}    
            </div>
        </article>
    
    )
}

export default West