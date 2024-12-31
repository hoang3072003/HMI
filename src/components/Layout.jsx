import React from 'react';

const Layout = ({ children }) => {
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-gradient-to-b from-gray-300 to-gray-100 min-h-screen">
            {/* Navigation */}
            <nav className="flex justify-end space-x-8 py-6 px-12 text-gray-900 font-large fixed top-0 left-0 right-0 bg-gray-300 shadow-md z-10">
                <button onClick={() => handleScroll('project-overview')} className="hover:text-blue-800">
                    Project Overview
                </button>
                <button onClick={() => handleScroll('need-finding')} className="hover:text-blue-800">
                    Need Finding
                </button>
                <button onClick={() => handleScroll('concept-video')} className="hover:text-blue-800">
                    Concept Video
                </button>
                <button onClick={() => handleScroll('lowfi-prototype')} className="hover:text-blue-800">
                    Low-fi Prototype
                </button>
                <button onClick={() => handleScroll('mefi-prototype')} className="hover:text-blue-800">
                    Me-fi Prototype
                </button>
            </nav>
            <div className="pt-20">{children}</div>
        </div>
    );
};

export default Layout;
