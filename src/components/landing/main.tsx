import { css } from '@emotion/react';
import React from 'react';

import { font, headerHeight, mobileHeaderHeight } from '~/global_styles/global';
import LargeLogo from '~/images/logo-full-large.png';
import SmallLogo from '~/images/logo-full-small.png';
import { mediaQueryTypes } from '~/types';

export default function Main({ isPC, isTablet, isMobile }: mediaQueryTypes) {
    const landingMainStyle = css`
        background: url(${require('~/images/bg-planet.svg').default}) top center
            no-repeat;
        background-size: cover;
        background-attachment: fixed;
        padding-top: ${isMobile ? mobileHeaderHeight : headerHeight};
        text-align: center;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        .wrap {
            width: ${isPC ? '73%' : isTablet ? '90%' : '91%'};
            padding-bottom: ${isPC ? '3%' : '10%'};
        }
        .mainLogo {
            background: url(${isMobile ? SmallLogo : LargeLogo}) center center
                no-repeat;
            background-size: contain;
            width: ${isMobile ? '70%' : '100%'};
            height: ${isPC ? '96px' : isTablet ? '74px' : '300px'};
            margin: ${isPC
                ? '0 auto 84px auto'
                : isTablet
                ? '0 auto 88px auto'
                : '0 0 10px 0'};
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
        .text {
            margin: 0 auto;
            position: relative;

            .mission {
                animation: bottom-to-top 1.5s 1s cubic-bezier(0.5, 0, 0.1, 1)
                    both;
                ${isPC
                    ? font('Inter', 700, 50, 70, 'var(--BASIC-WHITE)')
                    : isTablet
                    ? font('Inter', 700, 40, 55, 'var(--BASIC-WHITE)')
                    : font('Inter', 700, 30, 36.31, 'var(--BASIC-WHITE)')}
            }
            .description {
                animation: bottom-to-top 1.5s 1s cubic-bezier(0.5, 0, 0.1, 1)
                    both;
                margin: 0 auto;
                margin-top: ${isPC ? '36px' : isTablet ? '32px' : '20px'};
                background: rgba(14, 60, 116, 0.4);
                border: 1px solid #8bc7ff;
                backdrop-filter: blur(20px);
                border-radius: 10px;
                padding: ${isMobile ? '21.5px 25px' : '22.5px 34px'};
                width: ${isPC ? '728px' : isTablet ? '96%' : '100%'};
                ${font('Noto', 700, isPC ? 16 : 14, 28, 'var(--BASIC-WHITE)')}
            }
        }
    `;
    return (
        <div css={landingMainStyle}>
            <div className={'wrap'}>
                <div className={'mainLogo'} />
                <div className={'text'}>
                    <p className={'mission'}>
                        Creative space {isMobile && <br />} empowering <br />{' '}
                        all the female creators{' '}
                    </p>
                    <p className={'description'}>
                        Art와 Technology의 교차점에 있는 NFT 시장에서 여성
                        창작자의 매출 비중은 5%에 불과합니다.
                        {!isMobile && <br />} 포용적인 NFT 시장을 만들기 위해
                        여성 창작자 간 네트워킹과 협업을 지원합니다.
                    </p>
                </div>
            </div>
        </div>
    );
}
