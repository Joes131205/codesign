import React from "react";

const NavBar = () => {
    return (
        <nav className="font-poppins flex flex-row gap-[50px] justify-between items-center px-[200px] py-[20px] ">
            <img src="/src/assets/images/logo.png" alt="Logo" />
            <div>
                <ul className="text-[#050026] decoration-transparent flex gap-[50px]">
                    <li>
                        <a href="#">Pricing</a>
                    </li>
                    <li>
                        <a href="#">Features</a>
                    </li>
                    <li>
                        <a href="#">Our Products</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                </ul>
            </div>
            <div className="flex gap-[10px] items-center">
                <img src="/src/assets/images/lup.png" alt="Search Icon" />
                <span className="font-bold">GET THE APP</span>
            </div>
        </nav>
    );
};

export default NavBar;
