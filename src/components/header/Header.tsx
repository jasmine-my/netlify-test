import className from 'classnames/bind';
import React from 'react';

import style from './style.module.scss';

const cx = className.bind(style);

export default function Header() {
    return (
        <div className={cx('wrapper')}>
            <img src="" alt="" />
        </div>
    );
}
