import React from 'react';

const ProjectOverview = () => {
    return (
        <div id="project-overview" className="p-6 bg-gray 100">
            {/* Title */}
            <h1 className="text-5xl font-bold text-center mb-10 text-gray-800">
                Members Information
            </h1>

            {/* Members Grid */}
            <div className="bg-gray-100 shadow-lg rounded-lg p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {/* Member 1 */}
                <div className="flex flex-col items-center border rounded-lg p-6 hover:shadow-xl transition-transform transform hover:scale-105 bg-white">
                    <img
                        src="/HMI/avt5.jpg"
                        alt="Nguyễn Đức Phúc Hoàng"
                        className="w-40 h-40 object-cover rounded-full mb-4 shadow-md"
                    />
                    <div className="text-center">
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                            Nguyễn Đức Phúc Hoàng
                        </h3>
                        <p className="text-gray-700">Student ID: 20210385</p>
                        <p className="text-gray-700">Interests: Sleep all day</p>
                        <p className="text-gray-700">Major: Sleep all day</p>
                    </div>
                </div>

                {/* Member 2 */}
                <div className="flex flex-col items-center border rounded-lg p-6 hover:shadow-xl transition-transform transform hover:scale-105 bg-white">
                    <img
                        src="/HMI/avt2.jpg"
                        alt="Nguyễn Đình Thuận"
                        className="w-40 h-40 object-cover rounded-full mb-4 shadow-md"
                    />
                    <div className="text-center">
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                            Nguyễn Đình Thuận
                        </h3>
                        <p className="text-gray-700">Student ID: 20210827</p>
                        <p className="text-gray-700">Interests: Sleep all day</p>
                        <p className="text-gray-700">Major: Game Creator</p>
                    </div>
                </div>

                {/* Member 3 */}
                <div className="flex flex-col items-center border rounded-lg p-6 hover:shadow-xl transition-transform transform hover:scale-105 bg-white">
                    <img
                        src="/HMI/avt1.png"
                        alt="Adina"
                        className="w-40 h-40 object-cover rounded-full mb-4 shadow-md"
                    />
                    <div className="text-center">
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">Adina</h3>
                        <p className="text-gray-700">Student ID: 2024T0035</p>
                        <p className="text-gray-700">Interests: Music, Remote Sensing</p>
                        <p className="text-gray-700">Major: Computer Science</p>
                    </div>
                </div>
            </div>

            {/* About Group Section */}
            <div className="mt-10 bg-gray-100 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                    Project Overview    
                </h2>
                <p className="text-gray-700 leading-relaxed">
                    MedAI is a medical website designed to streamline healthcare interactions. It combines three core features to enhance usability and accessibility: a chatbot for instant assistance with health-related queries, a detailed database for looking up disease information, and an intuitive system for booking appointments with healthcare professionals. The focus is on creating a user-friendly platform that bridges the gap between users and reliable healthcare services, making medical information and support easily accessible.
                </p>
            </div>

            {/* Slogan Section */}
            <div className="mt-6 text-center">
                <p className="text-gray-900 font-extrabold text-3xl italic">
                    Do more. Better now.
                </p>
            </div>
        </div>
    );
};

export default ProjectOverview;
