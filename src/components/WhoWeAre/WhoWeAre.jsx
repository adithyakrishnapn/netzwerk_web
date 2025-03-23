import React from "react";

const teamMembers = [
    { id: 1, name: "Santhosh", image: "/images/avatar1.png" },
    { id: 2, name: "Adithya", image: "/images/avatar2.png" },
];

const WhoWeAre = () => {
    return (
        <section className="py-28 px-6 md:px-0 w-full">
            <div className="flex flex-col items-center text-center">
                <h1 className="text-4xl md:text-5xl font-semibold">Who We Are</h1>
                <div className="w-full max-w-3xl py-7 px-4">
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                        At Netzwerk, we’re redefining software development. Founded in 2021 and based in Coimbatore, Tamil Nadu,
                        we are a team of 10 passionate professionals operating as an MSME-registered startup. Our unique agency model
                        combines the creativity of freelancers with expert leadership to ensure every project meets industry standards.
                    </p>
                </div>
            </div>

            {/* Overlapping Avatar Section */}
            <div className="flex justify-center items-center mt-6 relative">
                {teamMembers.map((member, index) => (
                    <div
                        key={member.id}
                        className={`relative group transition-transform duration-300 ease-in-out cursor-pointer ${
                            index === 0 ? "z-30" : index === 1 ? "z-20 -ml-6 md:-ml-10" : "z-10 -ml-6 md:-ml-10"
                        }`}
                    >
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-purple-300 transition-transform duration-300 group-hover:scale-125"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-white font-semibold">{member.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhoWeAre;
