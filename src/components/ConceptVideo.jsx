import React from 'react';
import Layout from './Layout';

const ConceptVideo = () => {
    return (
        <Layout>
            <div className="flex flex-col items-center justify-center py-12 px-6">
                <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">Concept Video</h1>
                <div className="w-full max-w-4xl aspect-w-16 aspect-h-9">
                    {/* Video Google Drive */}
                    <iframe
                        src="https://drive.google.com/file/d/1y4dzjBk1MZtjJFw_a8lTQ4n1uCg2OnkQ/preview"
                        width="100%"
                        height="480"
                        allow="autoplay"
                        title="Concept Video"
                        className="rounded-lg shadow-lg"
                    ></iframe>
                </div>
                <p className="text-gray-600 text-lg mt-4">
                    Explore our project's concept video showcasing our ideas and solutions.
                </p>
                <div className="mt-8 text-center">
                    <h2 className="text-2xl font-semibold mb-2">Concept Video Slide</h2>
                    <p className="text-gray-700 mb-4">Click below to view or download the slides for our Concept Video.</p>
                    <a
                        href="/HMI/ConceptVideo.pptx"
                        target="_blank"
                        rel="noopener noreferrer"
                        download="ConceptVideo.pptx"
                        className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-red-500 transition"
                    >
                        View or Download Slide
                    </a>
                </div>
            </div>
        </Layout>
    );
};

export default ConceptVideo;
