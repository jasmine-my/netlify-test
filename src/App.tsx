import className from 'classnames/bind';
import React from 'react';

import style from './App.module.scss';

import '~/global_styles/globalFonts.scss';
import '~/global_styles/format_styles.css';
import '~/global_styles/colors.scss';
import Landing from '~/pages/landing/index';
function App() {
    return (
        <div className="App">
            <Landing />
        </div>
    );
}

export default App;
