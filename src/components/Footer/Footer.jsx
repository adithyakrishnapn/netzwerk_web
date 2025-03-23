import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-6 px-10">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-210 py-7">

                {/* Left: Logo */}
                <div className="flex items-center">
                    <img src="/Images/favicon.png" alt="Netzwerk Logo" className="h-8 mr-2" />
                    <span className="text-lg font-semibold">NETZWERK</span>
                </div>

                {/* Center: Navigation Links */}
                <nav className="flex flex-wrap justify-center gap-6 text-gray-300 text-sm mt-4 md:mt-0">
                    <ul className="hidden md:flex items-center ml-auto">
                        <li className="text-white px-4 hover:text-blue-500 cursor-pointer">About</li>
                        <li className="text-white px-4 hover:text-blue-500 cursor-pointer">Startup?</li>
                        <li className="text-white px-4 hover:text-blue-500 cursor-pointer">How we work</li>
                        <li className="text-white px-4 hover:text-blue-500 cursor-pointer">Our Solution</li>
                        <li className="text-white px-4 hover:text-blue-500 cursor-pointer">Our Team</li>
                        <li className="text-white px-4 hover:text-blue-500 cursor-pointer">Free Sample</li>
                        <li className="text-black bg-white rounded-3xl px-4 py-2 hover:bg-gray-500 cursor-pointer">
                            Free Consult
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Horizontal Line */}
            <div className="border-t border-gray-700 my-4 w-[90%] mx-auto"></div>

            {/* Bottom Copyright */}
            <p className="text-center text-gray-400 text-sm">Netzwerk @ 2025</p>
        </footer>
    );
};

export default Footer;

