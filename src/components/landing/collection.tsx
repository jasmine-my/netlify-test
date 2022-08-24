import { css } from '@emotion/react';
import React, { useEffect, useRef } from 'react';
import HorizontalScroll from 'react-scroll-horizontal';

import { landingSectionStyle } from '~/components/landing/cindy';
import { mediaQueryTypes } from '~/types';
import { useHorizontalScroll } from '~/useHooks/useHorizontalScroll';

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
            display: flex;
            gap: 40px;
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
            }
        }
    `;

    return (
        <div css={landingCollectionStyle}>
            <div className={'wrap'}>
                <p className={'title'}>Collection</p>
                <div className={'carousel'}>
                    <HorizontalScroll
                        pageLock={true}
                        reverseScroll={true}
                        style={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            gap: '40px',
                            overflowX: 'auto',
                        }}
                        css={css`
                            ::-webkit-scrollbar {
                                height: 0;
                                width: 0;
                            }
                        `}
                    >
                        <ul className={'collections'}>
                            {imageList.map((value) => (
                                <div className={'collection'} key={value} />
                            ))}
                        </ul>
                    </HorizontalScroll>
                </div>
            </div>
        </div>
    );
}
