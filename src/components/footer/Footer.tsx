import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { footerStyle } from '~/components/footer/style';
import { snsIconStyle } from '~/components/header/style';
import Icon from '~/components/icon/Icon';
import { mediaQuery } from '~/global_styles/global';

export const pcFooterHeight = '144px';
export const tabletFooterHeight = '258px';
export const mobileFooterHeight = '220px';

export default function Footer() {
    const isPC = useMediaQuery({ query: mediaQuery.PC });
    const isTablet = useMediaQuery({ query: mediaQuery.TABLET });
    const isMobile = useMediaQuery({ query: mediaQuery.MOBILE });

    return (
        <div css={footerStyle(isPC, isTablet, isMobile)}>
            <div className={'left'}>
                <img
                    className={'logo'}
                    src="/assets/images/logo-footer.svg"
                    alt="logo-footer"
                />
                <ul className={'copyright'}>
                    <li>space_of_woman@gmail.com</li>
                    <li>Copyright © SpaceOfWoman</li>
                </ul>
            </div>
            <ul css={snsIconStyle} className={'snsIcons'}>
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
