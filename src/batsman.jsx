import { useState } from "react"

export default function Batsman(){
    const [runs, setRuns] = useState(0);
    const [sixes, setSixes] = useState(0)

    const handleSingle = () => {
        const updatesRuns = runs + 1; 
        setRuns(updatesRuns)
    }

    const handleFour = () => {
        const updatesRuns = runs + 4; 
        setRuns(updatesRuns)
    }

    const handleSix = () => {
        const updateRuns = runs + 6;
        const updateSixes = sixes + 1;
        setSixes(updateSixes)
        setRuns(updateRuns)
    }
    
    return(
        <div>
            <h3>Player : Bangla Batsman</h3>
            {
                runs >  50 && <p>Your score : 50</p>
            }
            <h1>Score : {runs}</h1>
            <h1>Sixes count : {sixes} </h1>
            <button onClick={handleSingle}>singles</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}