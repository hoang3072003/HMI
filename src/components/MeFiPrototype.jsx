import React, { useState } from 'react';
import Layout from './Layout';

function MefiPrototype() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentTaskImages, setCurrentTaskImages] = useState([]);

    // Danh sách ảnh cho các task
    const tasks = [
        {
            label: 'Task 1: Overview',
            images: [{ src: '/HMI/mefi/mefi1.jpg', label: 'Overview' }],
        },
        {
            label: 'Task 2: Sign Up and Login',
            images: [
                { src: '/HMI/mefi/mefi6.jpg', label: 'Sign Up' },
                { src: '/HMI/mefi/mefi7.jpg', label: 'Login' },
            ],
        },
        {
            label: 'Task 3: Book an Appointment',
            images: [
                { src: '/HMI/mefi/mefi2.jpg', label: 'Step 1' },
                { src: '/HMI/mefi/mefi3.jpg', label: 'Step 2' },
                { src: '/HMI/mefi/mefi4.jpg', label: 'Step 3' },
                { src: '/HMI/mefi/mefi5.jpg', label: 'Step 4' },
            ],
        },
        {
            label: 'Task 4: Chatbot',
            images: [
                { src: '/HMI/mefi/mefi8.jpg', label: 'Chatbot Step 1' },
                { src: '/HMI/mefi/mefi9.jpg', label: 'Chatbot Step 2' },
                { src: '/HMI/mefi/mefi10.jpg', label: 'Chatbot Step 3' },
                { src: '/HMI/mefi/mefi11.jpg', label: 'Chatbot Step 4' },
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
                <h1 className="text-3xl font-bold text-center mb-4">Me-Fi Prototype</h1>

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

                {/* Figma Prototype Link */}
                <div className="mt-10 text-center">
                    <a
                        href="https://www.figma.com/proto/WaZSEPk05dzM4tD92qhDDx/HCI-Project?node-id=1-2&p=f&t=pGauPg8cZr1PkfmJ-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
                    >
                        Demo Website
                    </a>
                </div>
            </div>
        </Layout>
    );
}

export default MefiPrototype;
