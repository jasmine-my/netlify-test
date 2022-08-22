import { css } from '@emotion/react';
import React from 'react';

import { font } from '~/global_styles/global';
import { mediaQueryTypes } from '~/types';

export default function Cindy({ isPC, isTablet, isMobile }: mediaQueryTypes) {
    const landingCindyStyle = css`
        .title {
            ${font('Inter', 700, 65, 78.66, 'var(--BASIC-WHITE)')}
        }
        .cindy {
            background: url(${require('~/images/cindy.svg').default}) center
                center no-repeat;
            width: 310px;
            height: 310px;
            filter: drop-shadow(0px 10px 50px rgba(14, 60, 116, 0.4));
            border-radius: 10px;
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
            <p className={'title'}>Who is Cindy</p>
            <div className={'cindy'} />
            <p className={'text'}>
                Web3 우주공간 입장을 위해
                <span className={'extraBold'}>3,500개</span>의 Cindy를
                배포합니다! <br />
                아바타 <span className={'bold'}>Cindy</span>는 우주 공간{' '}
                <span className={'bold'}>SPACE OF WOMEN</span> 개발을 위해
                고안되었습니다
                <br />{' '}
                <span className={'extraBold'}>
                    자신만의 Cindy로 주어진 행성별 미션을 수행해 주세요
                </span>
            </p>
        </div>
    );
}
