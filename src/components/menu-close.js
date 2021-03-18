import React from 'react'

function MenuClose() {

    function openUp() {
        var veiled = document.getElementById('veiled');

        if (veiled.className === 'active'){
            veiled.className = 'inactive';
        } else {
            veiled.className = 'active';
        }
    }
    return (
        <button onClick={openUp} className="close-button">Close Menu</button>
    );
}

export default MenuClose;