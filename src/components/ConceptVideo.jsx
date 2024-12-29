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
            </div>
        </Layout>
    );
};

export default ConceptVideo;
