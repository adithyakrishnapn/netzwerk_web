import React, { useState, useEffect } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`w-full py-5 px-6 md:px-16 fixed top-0 left-0 flex items-center transition-all duration-300 ${
                isScrolled ? "bg-white/30 backdrop-blur-md shadow-md" : "bg-transparent"
            }`}
        >
            {/* Logo (Different for Desktop & Mobile) */}
            <div className="flex items-center">
                <img
                    src="/Images/light.png"
                    alt="Netzwerk Logo"
                    className="hidden md:block h-8"
                />
                <img
                    src="/Images/favicon.png"
                    alt="Netzwerk Logo"
                    className="md:hidden h-8"
                />
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center ml-auto">
                <li className="text-black px-4 hover:text-blue-500 cursor-pointer">About</li>
                <li className="text-black px-4 hover:text-blue-500 cursor-pointer">Startup?</li>
                <li className="text-black px-4 hover:text-blue-500 cursor-pointer">How we work</li>
                <li className="text-black px-4 hover:text-blue-500 cursor-pointer">Our Solution</li>
                <li className="text-black px-4 hover:text-blue-500 cursor-pointer">Our Team</li>
                <li className="text-white bg-black rounded-3xl px-4 py-2 hover:bg-gray-800 cursor-pointer">
                    Free Consult
                </li>
                <li className="text-black px-4 hover:text-blue-500 cursor-pointer">Free Sample</li>
            </ul>

            {/* Mobile Menu Button */}
            <button className="md:hidden ml-auto text-black text-3xl" onClick={() => setIsOpen(!isOpen)}>
                ☰
            </button>

            {/* Mobile Sidebar Menu */}
            <div
                className={`fixed top-0 right-0 px-3 h-screen w-2/3 bg-white/95 backdrop-blur-md shadow-lg transform ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-300 ease-in-out flex flex-col items-start p-6`}
            >
                {/* Close Button */}
                <button className="text-3xl self-end" onClick={() => setIsOpen(false)}>✕</button>

                {/* Menu Items */}
                <ul className="mt-10 w-full">
                    <li className="text-black py-2 border-b hover:text-blue-500 cursor-pointer">About</li>
                    <li className="text-black py-2 border-b hover:text-blue-500 cursor-pointer">Startup?</li>
                    <li className="text-black py-2 border-b hover:text-blue-500 cursor-pointer">How we work</li>
                    <li className="text-black py-2 border-b hover:text-blue-500 cursor-pointer">Our Solution</li>
                    <li className="text-black py-2 border-b hover:text-blue-500 cursor-pointer">Our Team</li>
                    <li className="text-white bg-black rounded-3xl px-4 py-2 mt-4 hover:bg-gray-800 cursor-pointer">
                        Free Consult
                    </li>
                    <li className="text-black py-2 border-t mt-4 hover:text-blue-500 cursor-pointer">Free Sample</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
