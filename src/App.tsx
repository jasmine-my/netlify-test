import { Global } from '@emotion/react';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import '~/global_styles/font.css';
import '~/global_styles/format_styles.css';
import '~/global_styles/colors.scss';
import Layout from '~/components/Layout';
import globalStyles from '~/global_styles/global';
import Landing from '~/pages/landing/index';
import Minting from '~/pages/minting/index';

function App() {
    return (
        <div className="App">
            <Global styles={globalStyles} />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Layout>
                            <Landing />
                        </Layout>
                    }
                />
                <Route path="/minting" element={<Minting />} />
            </Routes>
        </div>
    );
}

export default App;
