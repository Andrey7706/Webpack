import React, { useState } from "react";

import "../styles/Header.css";

function Header(props) {
    let [count, setNewCount] = useState(0);
    const handleClik = () => {
        setNewCount(count + 1);
    }

    return (
        <header>This is header
            <button className={ "some-button" } onClick ={ handleClik }>
                { props.buttonName }, clicked: { count } times
            </button>
        </header> 
    )
}

export default Header;
