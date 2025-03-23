import React from "react";

const logos = [
    { id: 1, src: "/Images/logos/igcse.png", alt: "ICSE Quest" },
    { id: 2, src: "/Images/logos/vistaes-logo-02.png", alt: "Vistaes" },
    { id: 3, src: "/Images/logos/ahmed_jaisim_logo-02.png", alt: "Arabic House" },
    { id: 4, src: "/Images/logos/eduspine_02.png", alt: "Eduspine" },
];

const Clients = () => {
    return (
        <section className="py-10 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex justify-center items-center space-x-10 md:space-x-20">
                    {logos.map((logo) => (
                        <img
                            key={logo.id}
                            src={logo.src}
                            alt={logo.alt}
                            className="h-16 md:h-24 grayscale transition-transform duration-300 hover:scale-110"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;
