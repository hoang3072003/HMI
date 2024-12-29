import React, { useState } from 'react';
import Layout from './Layout';

function LowFiPrototype() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Danh sách 6 hình ảnh
    const images = [
        { src: '/conceptsketches/sketch1.jpg', label: 'Sketch 1' },
        { src: '/conceptsketches/sketch2.jpg', label: 'Sketch 2' },
        { src: '/conceptsketches/sketch3.jpg', label: 'Sketch 3' },
        { src: '/conceptsketches/sketch4.jpg', label: 'Sketch 4' },
        { src: '/conceptsketches/sketch5.jpg', label: 'Sketch 5' },
        { src: '/conceptsketches/sketch6.jpg', label: 'Sketch 6' },
    ];

    const handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <Layout>
            <div className="p-6">
                <h1 className="text-3xl font-bold text-center mb-4">Low-Fi Prototype</h1>

                {/* Danh sách hình ảnh */}
                <div className="overflow-x-auto">
                    <div className="flex space-x-4">
                        {images.map((image, index) => (
                            <div className="flex flex-col items-center" key={index}>
                                <div
                                    className="w-40 h-40 border rounded-lg flex items-center justify-center cursor-pointer"
                                    onClick={() => handleImageClick(index)}
                                >
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

                {/* File Slide */}
                <div className="mt-8 text-center">
                    <h2 className="text-2xl font-semibold mb-2">Low-Fi Prototype Slide</h2>
                    <p className="text-gray-700 mb-4">Click below to view or download the slides for our prototype.</p>
                    <a
                        href="/conceptsketches/slide.pptx"
                        target="_blank"
                        rel="noopener noreferrer"
                        download="LowFiPrototypeSlide.pptx"
                        className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-red-500 transition"
                    >
                        View or Download Slide
                    </a>
                </div>

                {/* Modal for enlarged image */}
                {isOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
                        <button className="absolute left-4 text-white text-4xl" onClick={handlePrev}>
                            ❮
                        </button>
                        <img
                            src={images[currentImageIndex].src}
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
            </div>
        </Layout>
    );
}

export default LowFiPrototype;
