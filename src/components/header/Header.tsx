import React from 'react';

import { headerStyle } from '~/components/header/style';
import Icon from '~/components/icon/Icon';

export default function Header() {
    return (
        <div css={headerStyle}>
            <div className={'wrap'}>
                <img
                    className={'logo'}
                    src="/assets/images/logo-header.svg"
                    alt="header-logo"
                />
                <div className={'contents'}>
                    <ul className={'gnbItems'}>
                        <li>Story</li>
                        <li>Collection</li>
                        <li>Roadmap</li>
                        <li>Benefit</li>
                        <li>Team</li>
                        <li>Partner</li>
                    </ul>
                    <ul className={'snsIcons'}>
                        <li>
                            <Icon size={32} name={'sns-instagram'} />
                        </li>
                        <li>
                            <Icon size={32} name={'sns-discord'} />
                        </li>
                        <li>
                            <Icon size={32} name={'sns-twitter'} />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
