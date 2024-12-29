import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Home />
            </Layout>
        </BrowserRouter>
    );
}

export default App;
