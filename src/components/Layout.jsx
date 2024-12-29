import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="bg-gradient-to-b from-gray-300 to-gray-100 min-h-screen">
            {/* Navigation */}
            <nav className="flex justify-end space-x-8 py-6 px-12 text-gray-900 font-large fixed top-0 left-0 right-0 bg-gray-300 shadow-md z-10">
                <a href="#project-overview" className="hover:text-blue-800">Project Overview</a>
                <a href="#need-finding" className="hover:text-blue-800">Need Finding</a>
                <a href="#concept-video" className="hover:text-blue-800">Concept Video</a>
                <a href="#lowfi-prototype" className="hover:text-blue-800">Low-fi Prototype</a>
                <a href="#mefi-prototype" className="hover:text-blue-800">Me-fi Prototype</a>
            </nav>
            <div className="pt-20">{children}</div>
        </div>
    );
};

export default Layout;
