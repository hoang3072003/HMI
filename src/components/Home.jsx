import React from 'react';
import Layout from './Layout';
import ProjectOverview from './ProjectOverview';
import NeedFinding from './NeedFinding';
import ConceptVideo from './ConceptVideo';
import LowFiPrototype from './LowFiPrototype';
import MeFiPrototype from './MeFiPrototype';
const Home = () => {
    return (
        <Layout>
            {/* Main Section */}
            <div id="main-section" className="flex flex-col lg:flex-row items-center justify-between px-12 py-16">
                {/* Left Section: Title, Caption, Button */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <img src="/HMI/logofinal.jpg" alt="Logo" className="h-40 mx-auto lg:mx-0 mb-6" />
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">Medical AI</h1>
                    <p className="text-lg text-gray-700 mb-8">
                       Medical AI transforms everyday life with innovative, AI-driven solutions to real-world challenges.
                    </p>
                    <a href="#project-overview">
                        <button className="bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-600 transition">
                            Learn More
                        </button>
                    </a>
                </div>

                {/* Right Section: Images */}
                <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0 space-x-4">
                    <img src="/HMI/banner5.jpg" alt="Mockup 1" className="h-96 shadow-lg" />
                </div>
            </div>

            < ProjectOverview/>
            <div id="need-finding" className="bg-gray-100">
                <NeedFinding />
            </div>
            <div id="concept-video" className="bg-gray-100">
                <ConceptVideo />
            </div>
            <div id="lowfi-prototype" className="bg-gray-100">
                <LowFiPrototype />
            </div>
            <div id="mefi-prototype" className="bg-gray-100">
                <MeFiPrototype />
            </div>
        </Layout>
    );
};

export default Home;