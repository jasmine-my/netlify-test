import { css } from '@emotion/react';
import React from 'react';

import { font, headerHeight, mobileHeaderHeight } from '~/global_styles/global';
import { mediaQueryTypes } from '~/types';

export default function Main({ isPC, isTablet, isMobile }: mediaQueryTypes) {
    const landingMainStyle = css`
        background: url('/assets/images/bg-planet.svg') top center no-repeat;
        background-size: cover;
        padding-top: ${isMobile ? mobileHeaderHeight : headerHeight};
        text-align: center;
        .mainLogo {
            background: url(${isMobile
                    ? '/assets/images/logo-full-small.svg'
                    : '/assets/images/logo-full-large.svg'})
                center center no-repeat;
            background-size: contain;
            width: ${isPC ? '1407px' : isTablet ? '707px' : '313px'};
            height: ${isPC ? '96px' : isTablet ? '74px' : '179px'};
            margin: ${isPC
                ? '384px auto 84px auto'
                : isTablet
                ? '428px auto 88px auto'
                : '63px 16px 79px 16px'};
        }
        .text {
            margin: 0 auto;
            padding: ${isPC
                ? '16px 16px 19px 16px'
                : isTablet
                ? '16px 16px 153px 16px '
                : '16px 16px 61px 16px'};
            position: relative;
            .mission {
                ${isPC
                    ? font('Inter', 700, 50, 70, 'var(--BASIC-WHITE)')
                    : isTablet
                    ? font('Inter', 700, 40, 55, 'var(--BASIC-WHITE)')
                    : font('Inter', 700, 30, 36.31, 'var(--BASIC-WHITE)')}
            }
            .description {
                margin: 0 auto;
                margin-top: ${isPC ? '36px' : isTablet ? '32px' : '20px'};
                background: rgba(14, 60, 116, 0.4);
                border: 1px solid #8bc7ff;
                backdrop-filter: blur(20px);
                border-radius: 10px;
                padding: ${isMobile ? '21.5px 25px' : '22.5px 34px'};
                width: ${isPC ? '728px' : '100%'};
                ${font('Noto', 700, isPC ? 16 : 14, 28, 'var(--BASIC-WHITE)')}
            }
        }
    `;
    return (
        <div css={landingMainStyle}>
            <div className={'mainLogo'} />
            <div className={'text'}>
                <p className={'mission'}>
                    Creative space {isMobile && <br />} empowering <br /> all
                    the female creators{' '}
                </p>
                <p className={'description'}>
                    Art와 Technology의 교차점에 있는 NFT 시장에서 여성 창작자의
                    매출 비중은 5%에 불과합니다.
                    {!isMobile && <br />} 포용적인 NFT 시장을 만들기 위해 여성
                    창작자 간 네트워킹과 협업을 지원합니다.
                </p>
            </div>
        </div>
    );
}
