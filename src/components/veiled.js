import React from 'react'

function Veiled() {

    function openUp() {
        var veiled = document.getElementById('veiled');

        if (veiled.className === 'active'){
            veiled.className = 'inactive';
        } else {
            veiled.className = 'active';
        }
    }
    
    return (
        <button onClick={openUp} className="veil-button">Menu</button>
    );
}

export default Veiled;