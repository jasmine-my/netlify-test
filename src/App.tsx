import { Global } from '@emotion/react';
import React from 'react';

import '~/global_styles/globalFonts.scss';
import '~/global_styles/format_styles.css';
import '~/global_styles/colors.scss';
import Layout from '~/components/Layout';
import globalStyles from '~/global_styles/global';
import Landing from '~/pages/landing/index';

function App() {
    return (
        <div className="App">
            <Global styles={globalStyles} />
            <Layout>
                <Landing />
            </Layout>
        </div>
    );
}

export default App;
