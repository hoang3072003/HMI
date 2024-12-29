import React from 'react';
import Layout from './Layout';

function NeedFinding() {
    return (
        <Layout>
            <div className="p-6">
                <h1 className="text-4xl font-bold text-center mb-6">Need Finding</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* File Word 1 */}
                    <div className="bg-white shadow-lg rounded-md p-4 text-center hover:scale-105 transition-transform duration-300">
                        <h3 className="text-xl font-semibold text-gray-800">Consent Form</h3>
                        <a href="/needfinding/Consent Form.docx" 
                            className="block mt-2 text-blue-600 hover:text-blue-800" 
                            download>
                            Download
                        </a>
                    </div>

                    {/* File Word 2 */}
                    <div className="bg-white shadow-lg rounded-md p-4 text-center hover:scale-105 transition-transform duration-300">
                        <h3 className="text-xl font-semibold text-gray-800">Interview Questionaire</h3>
                        <a href="/needfinding/Interview Question.docx" 
                            className="block mt-2 text-blue-600 hover:text-blue-800" 
                            download>
                            Download
                        </a>
                    </div>

                    {/* File PPT */}
                    <div className="bg-white shadow-lg rounded-md p-4 text-center hover:scale-105 transition-transform duration-300">
                        <h3 className="text-xl font-semibold text-gray-800">Slides</h3>
                        <a href="/needfinding/Slides.pptx" 
                            className="block mt-2 text-blue-600 hover:text-blue-800" 
                            download>
                            Download
                        </a>
                    </div>

                    {/* File PDF */}
                    <div className="bg-white shadow-lg rounded-md p-4 text-center hover:scale-105 transition-transform duration-300">
                        <h3 className="text-xl font-semibold text-gray-800">Questionaire</h3>
                        <a href="/needfinding/Questionaire.pdf" 
                            className="block mt-2 text-blue-600 hover:text-blue-800" 
                            download>
                            Download
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default NeedFinding;
