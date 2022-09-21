import { css } from '@emotion/react';
import React, { MutableRefObject, useRef } from 'react';

import landingSectionStyle from '~/components/landing/landingsectionStyle';
import { font } from '~/global_styles/global';
import { mediaQueryTypes } from '~/types';
import { useOffsetTop } from '~/useHooks/useScroll';

export default function Cindy({ isPC, isTablet, isMobile }: mediaQueryTypes) {
    const ref = useRef() as MutableRefObject<HTMLDivElement | null>;
    const { isShow } = useOffsetTop(ref.current?.offsetTop);

    const landingCindyStyle = css`
        ${landingSectionStyle(isMobile, isTablet)};
        .cindy {
            background: url(${require('~/images/cindy.svg').default}) center
                center no-repeat;
            width: 310px;
            height: 310px;
            filter: drop-shadow(0px 10px 50px rgba(14, 60, 116, 0.4));
            border-radius: 10px;
            margin: ${isMobile ? '0 auto 30px auto' : '0 auto 60px auto'};
            box-shadow: 0 0 150px rgba(255, 255, 255, 0.3);
        }
        .text {
            ${font(
                'Noto',
                400,
                isMobile ? 16 : 20,
                isMobile ? 27 : 23,
                'var(--BASIC-WHITE)'
            )}
            .bold {
                ${font(
                    'Noto',
                    900,
                    isMobile ? 16 : 20,
                    isMobile ? 27 : 23,
                    'var(--BASIC-WHITE)'
                )}
            }
        }
    `;
    return (
        <div css={landingCindyStyle} ref={ref}>
            <div className={`text wrap ${isShow ? 'opacity' : ''}`}>
                <p className={'title'}>Who is Cindy</p>
                <div className={'cindy'}>
                    <div className={'bg'} />
                </div>
                <div className={'text breakInMobileText'}>
                    <p>
                        Web3 우주공간 입장을 위해{' '}
                        <span>3,500개의 Cindy를 배포합니다!</span>
                    </p>
                    <br />
                    <p>
                        아바타 <span className={'bold'}>Cindy</span>는 우주 공간{' '}
                        <span className={'bold'}>SPACE OF WOMEN</span>{' '}
                        {(isTablet || isMobile) && <br />}개발을 위해
                        고안되었습니다.
                    </p>
                    <br />
                    <p>
                        <span className={'extraBold'}>
                            자신만의 Cindy로 주어진{' '}
                        </span>
                        <span>행성별 미션을 수행해 주세요.</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
