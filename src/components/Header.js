import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Link to="/" className="logo">
                <span>DailyNews</span>
            </Link>
        </header>
    );
};

export default Header;
