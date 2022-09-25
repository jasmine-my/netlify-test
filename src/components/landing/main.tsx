import { css } from '@emotion/react';
import React, { MutableRefObject, useEffect, useRef } from 'react';

import { font, headerHeight, mobileHeaderHeight } from '~/global_styles/global';
import background from '~/images/bg-planet.png';
import LargeLogo from '~/images/logo-full-large.png';
import SmallLogo from '~/images/logo-full-small.png';
import { mediaQueryTypes } from '~/types';

export default function Main({ isPC, isTablet, isMobile }: mediaQueryTypes) {
    const landingMainStyle = css`
        background: url(${background}) top center no-repeat var(--SOW-PURPLE);
        background-size: cover;
        background-attachment: fixed;
        padding-top: ${isMobile ? mobileHeaderHeight : headerHeight};
        text-align: center;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        .wrap {
            width: ${isPC ? '73%' : isTablet ? '90%' : '91%'};
            height: ${isMobile ? '80%' : '50%'};
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-content: center;
            .breakInMobileText {
                span {
                    display: ${isMobile ? 'block' : 'inline'};
                }
            }
        }
        .mainLogo {
            background: url(${isMobile ? SmallLogo : LargeLogo})
                ${isMobile ? 'left' : 'center'} no-repeat;
            background-size: contain;
            width: ${isMobile ? '70%' : '100%'};
            height: ${isPC ? '96px' : isTablet ? '74px' : '200px'};
            margin: ${isPC
                ? '0 auto 41px auto'
                : isTablet
                ? '0 auto 24px auto'
                : '0 0 19px 0'};
            animation: bottom-to-top 1.5s 1s cubic-bezier(0.5, 0, 0.1, 1) both;
            @keyframes bottom-to-top {
                from {
                    opacity: 0;
                    transform: translateY(50%);
                }
                to {
                    opacity: 1;
                    transform: none;
                }
            }
        }
        .mission {
            animation: bottom-to-top 1.5s 1s cubic-bezier(0.5, 0, 0.1, 1) both;
            text-align: ${isMobile ? 'start' : 'center'};
            ${isPC
                ? font('Inter', 700, 40, 70, 'var(--BASIC-WHITE)')
                : isTablet
                ? font('Inter', 700, 28, 55, 'var(--BASIC-WHITE)')
                : font('Inter', 700, 22, 26.63, 'var(--BASIC-WHITE)')}
        }
        .description {
            margin: 0 auto;
            position: relative;
            animation: bottom-to-top 1.5s 1s cubic-bezier(0.5, 0, 0.1, 1) both;
            margin-top: ${isPC ? '36px' : isTablet ? '32px' : '20px'};
            background: rgba(14, 60, 116, 0.4);
            border: 1px solid #8bc7ff;
            backdrop-filter: blur(20px);
            border-radius: 10px;
            padding: ${isMobile ? '21.5px 25px' : '22.5px 34px'};
            width: ${isPC ? '728px' : isTablet ? '96%' : '100%'};
            ${font('Noto', 700, isPC ? 16 : 14, 28, 'var(--BASIC-WHITE)')}
        }
    `;

    const ref = useRef() as MutableRefObject<HTMLDivElement>;
    useEffect(() => {}, [ref]);

    return (
        <div css={landingMainStyle} ref={ref}>
            <div className={'wrap'}>
                <div>
                    <div className={'mainLogo'} />
                    <p className={'mission breakInMobileText'}>
                        Creative space empowering{' '}
                        <span>all the female creators</span>
                    </p>
                </div>
                <div className={'description breakInMobileText'}>
                    <p>
                        Art와 Technology의 교차점에 있는 NFT 시장에서{' '}
                        <span>여성 창작자의 매출 비중은 5%에 불과합니다.</span>
                    </p>
                    <p>
                        포용적인 NFT 시장을 만들기 위해{' '}
                        <span>
                            여성 창작자 간 네트워킹과 협업을 지원합니다.
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}
