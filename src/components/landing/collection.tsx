import { css } from '@emotion/react';
import React from 'react';
import Marquee from 'react-fast-marquee';

import { landingSectionStyle } from '~/components/landing/cindy';
import { mediaQueryTypes } from '~/types';

export default function Collection({
    isPC,
    isTablet,
    isMobile,
}: mediaQueryTypes) {
    const imageList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const landingCollectionStyle = css`
        ${landingSectionStyle(isMobile, isTablet)};
        .wrap {
            width: 100%;
            height: ${isMobile ? '300px' : '450px'};
        }
        .carousel {
            width: 100%;
            height: 100%;
        }
        .collections {
            width: calc(
                (
                    ${isMobile ? '274.07px' : '440px'} * ${imageList.length} +
                        ${isMobile ? '40px' : '24.92px'} *
                        ${imageList.length + 1}
                )
            );
            .collection {
                width: 100%;
                height: ${isMobile ? '274.07px' : '440px'};
                background: var(--OPACITY-WHITE);
                border-radius: ${isMobile ? '12.46px' : '20px'};
                margin-right: 40px;
            }
        }
    `;

    return (
        <div css={landingCollectionStyle}>
            <div className={'wrap'}>
                <p className={'title'}>Collection</p>
                <ul className={'collections'}>
                    <Marquee pauseOnHover={true} gradient={false} speed={40}>
                        {imageList.map((value) => (
                            <div className={'collection'} key={value} />
                        ))}
                    </Marquee>
                </ul>
            </div>
        </div>
    );
}
