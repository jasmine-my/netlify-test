import { css } from '@emotion/react';
import React, { MutableRefObject, useRef } from 'react';
import Marquee from 'react-fast-marquee';

import landingSectionStyle from '~/components/landing/landingsectionStyle';
import { mediaQueryTypes } from '~/types';
import { useOffsetTop } from '~/useHooks/useScroll';

export default function Collection({
    isPC,
    isTablet,
    isMobile,
}: mediaQueryTypes) {
    const imageList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    const landingCollectionStyle = css`
        ${landingSectionStyle(isMobile, isTablet)};
        .wrap {
            width: 100%;
            // height: ${isMobile ? '300px' : '450px'};
            min-height: 100vh;
            z-index: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .carousel {
            width: 100%;
            height: 100%;
        }
        .collections {
            width: calc(
                (
                    ${isMobile ? '250px' : '300px'} * ${imageList.length} +
                        ${isMobile ? '30px' : '24.92px'} *
                        ${imageList.length + 1}
                )
            );
            .collection {
                width: 100%;
                height: ${isMobile ? '250px' : '300px'};
                border-radius: ${isMobile ? '12.46px' : '20px'};
                margin-right: 30px;
                overflow: hidden;
            }
        }
        position: relative;
        .planet {
            position: absolute;
            z-index: 0;
            &.saturn {
                top: -80px;
                right: ${isPC ? '-300px' : '-100000px'};
                background: url(${require('~/images/planet/planet-mars.svg')
                        .default})
                    no-repeat center center;
                background-size: contain;
                width: 1200px;
                height: 700px;
            }
        }
    `;

    const ref = useRef() as MutableRefObject<HTMLDivElement | null>;
    const { isShow } = useOffsetTop(ref.current?.offsetTop);

    return (
        <div css={landingCollectionStyle} ref={ref}>
            <div className={'planet saturn'} />
            <div className={`wrap ${isShow ? 'opacity' : ''}`}>
                <p className={'title'}>Collection</p>
                <ul className={'collections'}>
                    <Marquee pauseOnHover={true} gradient={false} speed={40}>
                        {imageList.map((value) => (
                            <div
                                className={'collection'}
                                key={value}
                                css={css`
                                    background: url('assets/images/collections/collection-${value}.jpg')
                                        center center no-repeat;
                                    background-size: cover;
                                `}
                            />
                        ))}
                    </Marquee>
                </ul>
            </div>
        </div>
    );
}
