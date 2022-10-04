import { css } from '@emotion/react';
import React, { MutableRefObject, useRef } from 'react';

import landingSectionStyle from '~/components/landing/landingsectionStyle';
import { mediaQueryTypes } from '~/types';
import { useOffsetTop } from '~/useHooks/useScroll';

export default function Partner({ isPC, isTablet, isMobile }: mediaQueryTypes) {
    const landingPartnerStyle = css`
        ${landingSectionStyle(isMobile, isTablet)};
        min-height: auto;
        background: var(--BASIC-NAVY);
        padding: ${isMobile ? '100px 0' : '125px 0'};
        .partners {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: ${isMobile ? 'wrap' : 'no-wrap'};
            div {
                height: ${isPC ? '168px' : '94px'};
                width: ${isMobile ? '100%' : '286px'};
            }
        }
    `;

    const ref = useRef() as MutableRefObject<HTMLDivElement | null>;
    const { isShow } = useOffsetTop(ref.current?.offsetTop);

    return (
        <div css={landingPartnerStyle} ref={ref}>
            <div className={`wrap ${isShow ? 'opacity' : ''}`}>
                <p className={'title'}>Partner</p>
                <div className={'partners'}>
                    <div
                        css={css`
                            background: url('assets/images/partners/partner-1.png')
                                center center no-repeat;
                        `}
                    />
                    <div
                        css={css`
                            background: url('assets/images/partners/partner-2.png')
                                center center no-repeat;
                        `}
                    />
                </div>
            </div>
        </div>
    );
}
