import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { FaLaptopCode } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { BsCloud } from "react-icons/bs";
import FAQ from '../../components/Faq/Faq';
import Footer from '../../components/Footer/Footer';
import WhoWeAre from '../../components/WhoWeAre/WhoWeAre';
import Clients from '../../components/Clients/Clients';

const Home = () => {
    return (
        <>
            <Navbar />

            {/* lander section*/}

            <section className="h-[80vh] flex items-center justify-center px-6 md:px-0">
                <div className="text-center max-w-2xl py-8 mt-20">
                    <h1 className="text-3xl md:text-5xl font-semibold text-black leading-tight">
                        Transforming Your Ideas
                        <br />
                        <span className="block py-3 md:py-5">Into Powerful Solutions</span>
                    </h1>
                    <p className="text-lg md:text-xl py-2 text-gray-600">
                        Your vision, our expertise! At Netzwerk, we craft industry-standard
                        <br className="hidden md:block" />
                        software tailored to your needs—efficient, innovative, and affordable.
                    </p>
                    <div className="py-5">
                        <button className="bg-black text-white rounded-3xl px-6 py-3 w-full sm:w-auto">
                            Get Free Consult
                        </button>
                    </div>
                </div>
            </section>


            {/* lander image section*/}
            <section className="h-[65vh] bg-[url('/Images/lander.png')] bg-cover bg-center bg-no-repeat"></section>

            {/* Who We Are section*/}
            <WhoWeAre />



            {/* Our Expertise section*/}
            <section className="py-10 px-6 md:px-0 w-full">
                <div className="flex flex-col items-center text-center">
                    <h1 className="text-4xl md:text-5xl font-semibold">Our Expertise</h1>
                    <div className="w-full max-w-2xl py-7">
                        <p className="text-lg text-gray-600">
                            From app development to organizational scaling, we provide all the expertise and resources you require for success.
                        </p>
                    </div>

                    {/* Expertise Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full py-7">

                        {/* Web App Development */}
                        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center gap-2">
                                <h3 className="text-xl font-semibold">Web App Development</h3>
                                <FaLaptopCode className="text-black" />
                            </div>
                            <p className="text-gray-600 mt-2 text-left">
                                Develop a robust, scalable application with cutting-edge technologies, ensuring security and delivering an exceptional user experience.
                            </p>
                            <a href="#" className="mt-4 inline-flex items-center text-black font-semibold">
                                Read more <span className="ml-2">→</span>
                            </a>
                        </div>

                        {/* Research & Development */}
                        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center gap-2">
                                <h3 className="text-xl font-semibold">Research & Development</h3>
                                <BiSearchAlt className="text-blue-500" />
                            </div>
                            <p className="text-gray-600 mt-2 text-left">
                                Drive innovation through rigorous research and development, creating cutting-edge solutions that shape the future and inspire progress.
                            </p>
                            <a href="#" className="mt-4 inline-flex items-center text-black font-semibold">
                                Read more <span className="ml-2">→</span>
                            </a>
                        </div>

                        {/* Cloud Solutions */}
                        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center gap-2">
                                <h3 className="text-xl font-semibold">Cloud Solutions</h3>
                                <BsCloud className="text-gray-600" />
                            </div>
                            <p className="text-gray-600 mt-2 text-left">
                                Drive innovation with cloud solutions that empower growth, enhance collaboration, and ensure security for a future-ready business.
                            </p>
                            <a href="#" className="mt-4 inline-flex items-center text-black font-semibold">
                                Read more <span className="ml-2">→</span>
                            </a>
                        </div>

                    </div>
                </div>
            </section>

            {/* Clients section*/}
            <Clients />


            {/* Client Projects */}
            <section className="py-28 px-6 md:px-0 w-full">
                <div className="flex flex-col items-center text-center">
                    <h1 className="text-4xl md:text-5xl font-semibold">Client Projects</h1>

                    {/* First Section */}
                    <div className="container mx-auto flex flex-col md:flex-row items-center justify-center py-20">
                        {/* Left Text Box */}
                        <div className="w-full md:w-[40%] mb-10 md:mb-0 px-4 text-center md:text-left">
                            <p className="text-xl text-gray-700 leading-relaxed">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                            </p>
                            <div className="mt-5">
                                <a href="#" className="text-blue-600 font-semibold flex items-center justify-center md:justify-start hover:underline">
                                    Read more <span className="ml-2">→</span>
                                </a>
                            </div>
                        </div>

                        {/* Right Image Box */}
                        <div className="w-full md:w-[40%] px-4 flex justify-center">
                            <img src="/Images/edu.png" alt="Project Image"
                                className="max-w-full h-auto py-6 md:transition-transform md:duration-300 md:hover:scale-110" />
                        </div>
                    </div>

                    {/* Second Section (Reversed for Mobile) */}
                    <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center py-7">
                        {/* Left Image Box */}
                        <div className="w-full md:w-[40%] px-4 flex justify-center">
                            <img src="/Images/plumbing.png" alt="Project Image"
                                className="max-w-full h-auto py-6 md:transition-transform md:duration-300 md:hover:scale-110" />
                        </div>

                        {/* Right Text Box */}
                        <div className="w-full md:w-[40%] mb-10 md:mb-0 px-4 text-center md:text-left">
                            <p className="text-xl text-gray-700 leading-relaxed">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                            </p>
                            <div className="mt-5">
                                <a href="#" className="text-blue-600 font-semibold flex items-center justify-center md:justify-start hover:underline">
                                    Read more <span className="ml-2">→</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Third Section */}
                    <div className="container mx-auto flex flex-col md:flex-row items-center justify-center py-7">
                        {/* Left Text Box */}
                        <div className="w-full md:w-[40%] mb-10 md:mb-0 px-4 text-center md:text-left">
                            <p className="text-xl text-gray-700 leading-relaxed">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.                            </p>
                            <div className="mt-5">
                                <a href="#" className="text-blue-600 font-semibold flex items-center justify-center md:justify-start hover:underline">
                                    Read more <span className="ml-2">→</span>
                                </a>
                            </div>
                        </div>

                        {/* Right Image Box */}
                        <div className="w-full md:w-[40%] px-4 flex justify-center">
                            <img src="/Images/eduspine.png" alt="Project Image"
                                className="max-w-full h-auto py-6 md:transition-transform md:duration-300 md:hover:scale-110" />
                        </div>
                    </div>
                </div>
            </section>





            {/* Feasibility section*/}
            <section className="py-17 px-6 md:px-0 w-full">
                <div className="flex flex-col items-center text-center">
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed"> Fair Payments, No Upfront Costs-Your Trust, Our Priority</p>
                    <h1 className="text-4xl md:text-5xl font-semibold py-10">Our Payment Feasibility</h1>
                    <div className="w-full max-w-3xl py-7 px-4">
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                            Forget upfront costs! With our No Advance Policy, you only pay after 25% of the work is done. Share your requirements, watch us deliver progress, and then make the initial payment—it’s that simple.                        </p>
                    </div>
                </div>
            </section>

            {/* Faq section */}
            <FAQ />


            {/* Banner Section */}
            <section className="py-16 px-6 flex justify-center items-center w-full">
                <div className="bg-[#256EEE] text-white py-12 px-6 md:px-16 text-center w-full max-w-4xl rounded-3xl flex flex-col md:flex-row items-center justify-between shadow-lg">

                    {/* Left Text Section */}
                    <div className="w-full md:w-[55%] px-6 md:text-left text-center">
                        <h2 className="text-3xl md:text-4xl font-semibold leading-snug md:leading-tight">
                            Ready to build your team’s dream Web App?
                        </h2>
                        <p className="text-lg text-gray-200 mt-3 md:mt-4">
                            Let's turn your ideas into reality with expert development.
                        </p>
                        <div className="mt-6 flex justify-center md:justify-start">
                            <a href="#" className="bg-black text-white px-6 py-3 rounded-full inline-block hover:bg-gray-800 transition duration-300">
                                Get started
                            </a>
                        </div>
                    </div>

                    {/* Right Image Section */}
                    <div className="w-full md:w-[40%] flex justify-center mt-8 md:mt-0">
                        <img
                            src="/Images/favicon.png"
                            alt="Project Illustration"
                            className="w-32 md:w-48 h-auto py-6 transition-transform duration-300 hover:scale-105"
                        />
                    </div>

                </div>
            </section>



            {/* Footer */}
            <Footer />
        </>
    );
}

export default Home;
