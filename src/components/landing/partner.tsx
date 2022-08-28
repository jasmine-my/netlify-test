import { css } from '@emotion/react';
import React from 'react';

import { landingSectionStyle } from '~/components/landing/cindy';
import { mediaQueryTypes } from '~/types';

export default function Partner({ isPC, isTablet, isMobile }: mediaQueryTypes) {
    const landingPartnerStyle = css`
        ${landingSectionStyle(isMobile, isTablet)};
        background: var(--BASIC-NAVY);
        padding: ${isMobile ? '100px 0' : '125px 0'};
        .partners {
            display: grid;
            grid-template-columns: ${isPC
                ? 'repeat(5, 1fr)'
                : 'repeat(1, 1fr)'};
            justify-items: center;
            div {
                border: 1px solid var(--BASIC-GREY-2);
                height: ${isPC ? '168px' : '73.5px'};
                width: ${isMobile ? '50%' : '100%'};
            }
        }
    `;

    return (
        <div css={landingPartnerStyle}>
            <div className={'wrap'}>
                <p className={'title'}>Partner</p>
                <div className={'partners'}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}
