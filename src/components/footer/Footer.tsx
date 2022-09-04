import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { footerStyle } from '~/components/footer/style';
import { snsIconStyle } from '~/components/header/style';
import Icon from '~/components/icon/Icon';
import { mediaQuery } from '~/global_styles/global';
import { urlInfo } from '~/information/urlInfo';

export const pcFooterHeight = '144px';
export const tabletFooterHeight = '258px';
export const mobileFooterHeight = '220px';

export default function Footer() {
    const isPC = useMediaQuery({ query: mediaQuery.PC });
    const isTablet = useMediaQuery({ query: mediaQuery.TABLET });
    const isMobile = useMediaQuery({ query: mediaQuery.MOBILE });

    return (
        <div css={footerStyle(isPC, isTablet, isMobile)}>
            <div className={'wrap'}>
                <div className={'left'}>
                    <img
                        className={'logo'}
                        src={require('~/images/logo-footer.svg').default}
                        alt="logo-footer"
                    />
                    <ul className={'copyright'}>
                        <li>spaceofwomen@gmail.com</li>
                        <li>Copyright © SpaceOfWomen</li>
                    </ul>
                </div>
                <ul css={snsIconStyle} className={'snsIcons'}>
                    {urlInfo.map((sns) => (
                        <li key={sns.name}>
                            <Icon
                                size={32}
                                name={`sns-${sns.name}`}
                                onClick={() => window.open(sns.url)}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
