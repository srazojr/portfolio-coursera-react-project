import React from "react"

function Nav(props) {
    return (<>
        <ul>
            <li><a href="/home" alt="">Home</a></li>
            <li><a href="/about" alt="">About</a></li>
            <li><a href="/menu" alt="">Menu</a></li>
            <li><a href="/reservations" alt="">Reservations</a></li>
        </ul>
    </>)
}

export default Nav;