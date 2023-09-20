import { useState } from 'react';

function PersonalInfo() {
    const [food, setFood] = useState("cake");
    const interests = ["Drawing/Designing", "Photography", "Solving logic puzzles", "Board, card and video games"];

    function handleClick(){
        setFood("potato")
    }

    return ( 
    <>
        <h1>Personal Info</h1>
        <h2>Interests</h2>
        {interests.map((interest) => (
                <p>{interest}</p>
            ))}
        <br></br><br></br>
        <p>I like to eat {food}.</p> 
        <button onClick={handleClick}>Click for new information.</button>
        <br></br><br></br>
        <p>more coming soon</p>
    </>
    );
}

export default PersonalInfo;

