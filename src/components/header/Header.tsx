import { css } from '@emotion/react';
import React from 'react';

import Icon from '~/components/icon/Icon';

export default function Header() {
    return (
        <div>
            <img src="/assets/images/logo-header.svg" alt="header-logo" />
            <ul>
                <li>Story</li>
                <li>Collection</li>
                <li>Roadmap</li>
                <li>Benefit</li>
                <li>Team</li>
                <li>Partner</li>
            </ul>
            <ul>
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
    );
}
