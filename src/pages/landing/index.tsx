import className from 'classnames/bind';
import React from 'react';

import style from './style.module.scss';

const cx = className.bind(style);

export default function Index() {
    return (
        <div className={cx('wrapper')}>
            Landing
            <p className={cx('test1')}>Test1 이거는 테스트</p>
            <p className={cx('normal')}>Test1 이거는 테스트</p>
            <p>Test3</p>
            <p>Test4</p>
        </div>
    );
}
