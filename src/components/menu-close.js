import React, { useRef } from 'react'

function MenuClose() {

    function openUp() {
        var veiled = useRef();

        if (veiled.className === 'active'){
            veiled.className = 'inactive';
        } else {
            veiled.className = 'active';
        }
    }
    return (
        <button onClick={openUp} className="close-button" ref={veiled}>Close Menu</button>
    );
}

export default MenuClose;