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
            display: grid;
            // TODO: 파트너 개수에 따라서 조정되도록
            grid-template-columns: ${isPC
                ? 'repeat(2, 1fr)'
                : 'repeat(1, 1fr)'};
            justify-items: center;
            div {
                border: 1px solid var(--BASIC-GREY-2);
                height: ${isPC ? '168px' : '73.5px'};
                width: ${isMobile ? '50%' : '100%'};
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
                    <div />
                    <div />
                </div>
            </div>
        </div>
    );
}
