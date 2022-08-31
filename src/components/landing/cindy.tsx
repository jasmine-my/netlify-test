import { css } from '@emotion/react';
import React from 'react';

import { font } from '~/global_styles/global';
import { mediaQueryTypes } from '~/types';

export const landingSectionStyle = (
    isMobile: boolean,
    isTablet: boolean
) => css`
    width: 100%;
    min-height: 100vh;
    padding: ${isMobile ? '90px 0' : isTablet ? '150px 0' : '200px 0'};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    .wrap {
        width: ${isMobile ? '90%' : isTablet ? '60%' : '75%'};
    }
    .title {
        ${isMobile
            ? font('Inter', 700, 48, 58.09, 'var(--BASIC-WHITE)')
            : font('Inter', 700, 65, 78.66, 'var(--BASIC-WHITE)')};
        margin-bottom: ${isMobile ? '40px' : '80px'};
        text-align: center;
        position: relative;
    }
`;

export default function Cindy({ isPC, isTablet, isMobile }: mediaQueryTypes) {
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
                isMobile ? 16 : 28,
                isMobile ? 21.79 : 36,
                'var(--BASIC-WHITE)'
            )}
            .bold {
                ${font(
                    'Noto',
                    700,
                    isMobile ? 16 : 28,
                    isMobile ? 21.79 : 36,
                    'var(--BASIC-WHITE)'
                )}
            }
            .extraBold {
                ${font(
                    'Noto',
                    900,
                    isMobile ? 16 : 28,
                    isMobile ? 21.79 : 36,
                    'var(--BASIC-WHITE)'
                )}
            }
        }
    `;
    return (
        <div css={landingCindyStyle}>
            <div className={'wrap'}>
                <p className={'title'}>Who is Cindy</p>
                <div className={'cindy'}>
                    <div className={'bg'} />
                </div>
                <p className={'text'}>
                    Web3 우주공간 입장을 위해{' '}
                    <span className={'extraBold'}>3,500개</span>의 Cindy를
                    배포합니다! <br />
                    <br />
                    아바타 <span className={'bold'}>Cindy</span>는 우주 공간{' '}
                    <span className={'bold'}>SPACE OF WOMEN</span> 개발을 위해
                    고안되었습니다
                    <br />
                    <br />{' '}
                    <span className={'extraBold'}>
                        자신만의 Cindy로 주어진 행성별 미션을 수행해 주세요
                    </span>
                </p>
            </div>
        </div>
    );
}
