import React, { useRef} from 'react'

function Veiled() {

    function openUp() {
        const veiled = useRef();

        if (veiled.className === 'active'){
            veiled.className = 'inactive';
        } else {
            veiled.className = 'active';
        }
    }
    
    return (
        <button onClick={openUp} className="veil-button" ref={veiled}>Menu</button>
    );
}

export default Veiled;