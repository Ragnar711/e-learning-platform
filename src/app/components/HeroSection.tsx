import React from "react";

const HeroSection = () => {
    return (
        <section className="bg-blue-900 text-white py-16 relative">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                    Learn Anytime, Anywhere
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl mb-8">
                    Explore our courses and enhance your skills at your own
                    pace.
                </p>
                <div className="flex justify-center">
                    <button className="bg-yellow-500 text-blue-900 hover:bg-yellow-400 hover:text-blue-800 py-2 px-6 rounded-full text-lg font-semibold transition duration-300">
                        Get Started
                    </button>
                </div>
            </div>

            {/* Animated illustration */}
            <div className="hidden md:block absolute top-0 right-0 mt-16 mr-16">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 200 200"
                    width="200"
                    height="200"
                    className="animate-float"
                >
                    {/* Your animated SVG illustration goes here */}
                </svg>
            </div>
        </section>
    );
};

export default HeroSection;
