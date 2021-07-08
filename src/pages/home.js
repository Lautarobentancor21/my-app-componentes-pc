import React from 'react'
import Firebase from "../components/firebase/GetItem"

function home() {
    return (
        <div>
            <h2>ACA VA EL HOME DE LA PAGINA</h2>
            <Firebase />
        </div>
    )
}

export default home
