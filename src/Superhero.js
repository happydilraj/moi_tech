import React from "react";


export default function Superhero() {
 
    const handleHero = async () => {
        var id = document.getElementById('handleNumber').value
        const url = `https://superheroapi.com/api/1364761417616674/${id}/`
            const response = await fetch(url, {
                headers: {
                    "Content-Type": "application/json",
                   
                }
            });
            const jsonData = await response.json();
            console.log(response.json());
    }

  return (
    <div>
      <div id="header">SUPERHERO TEAM</div>
      <h2 id="findsup">Find a SuperHero with any number from 1 to 737</h2>
      <div id="enterno">
        <input type="number" placeholder="Enter the number" id="handleNumber" />
        <button onClick={handleHero}>Find Hero</button>
      </div>
    </div>
  );
}
