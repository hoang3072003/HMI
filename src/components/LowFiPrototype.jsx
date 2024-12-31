import React, { useState } from 'react';
import Layout from './Layout';

function LowFiPrototype() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentTaskImages, setCurrentTaskImages] = useState([]);

    // Danh sách ảnh cho các task
    const tasks = [
        {
            label: 'Interface Concept Sketches',
            images: [
                { src: '/HMI/conceptsketches/sketch1.jpg', label: 'Interactive Wearable' },
                { src: '/HMI/conceptsketches/sketch5.jpg', label: 'Website/App' },
                { src: '/HMI/conceptsketches/sketch6.jpg', label: 'Public kiosk' }
            ],
        },
        {
            label: 'Birds Eye View of Prototype',
            images: [
                { src: '/HMI/conceptsketches/lofi.jpg', label: 'Sketches' },
            ],
        },
        {
            label: 'Low-Fi Prototype',
            images: [
                { src: '/HMI/conceptsketches/sketch2.jpg', label: 'Sign in/ Sign up' },
                { src: '/HMI/conceptsketches/sketch3.jpg', label: 'Chatbot' },
                { src: '/HMI/conceptsketches/sketch4.jpg', label: 'Appointment booking' },
            ],
        },
    ];

    const handleImageClick = (taskIndex, imageIndex) => {
        setCurrentTaskImages(tasks[taskIndex].images);
        setCurrentImageIndex(imageIndex);
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % currentTaskImages.length);
    };

    const handlePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + currentTaskImages.length) % currentTaskImages.length);
    };

    return (
        <Layout>
            <div className="p-6">
                <h1 className="text-3xl font-bold text-center mb-4">Low-Fi Prototype</h1>

                {/* Danh sách các Task */}
                {tasks.map((task, taskIndex) => (
                    <div key={taskIndex} className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">{task.label}</h2>
                        <div className="flex space-x-4 overflow-x-auto">
                            {task.images.map((image, imageIndex) => (
                                <div
                                    className="flex flex-col items-center"
                                    key={imageIndex}
                                    onClick={() => handleImageClick(taskIndex, imageIndex)}
                                >
                                    <div className="w-40 h-40 border rounded-lg flex items-center justify-center cursor-pointer">
                                        <img
                                            src={image.src}
                                            alt={image.label}
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    </div>
                                    <p className="mt-2 text-center">{image.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Modal for enlarged image */}
                {isOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
                        <button className="absolute left-4 text-white text-4xl" onClick={handlePrev}>
                            ❮
                        </button>
                        <img
                            src={currentTaskImages[currentImageIndex].src}
                            alt="Enlarged"
                            className="max-w-full max-h-full rounded-lg"
                        />
                        <button className="absolute right-4 text-white text-4xl" onClick={handleNext}>
                            ❯
                        </button>
                        <div
                            className="absolute top-4 right-4 cursor-pointer text-white text-4xl"
                            onClick={handleClose}
                        >
                            ✖
                        </div>
                    </div>
                )}

                {/* File Slide */}
                <div className="mt-8 text-center">
                <h2 className="text-2xl font-semibold mb-2">Low-Fi Prototype Slide</h2>
                <p className="text-gray-700 mb-4">Click below to view or download the slides for our prototype.</p>
                <a
                    href="/HMI/conceptsketches/slide.pptx"
                    target="_blank"
                    rel="noopener noreferrer"
                    download="LowFiPrototypeSlide.pptx"
                    className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-red-500 transition"
                >
                    View or Download Slide
                </a>
                </div>
            </div>
        </Layout>
    );
}

export default LowFiPrototype;
