import { css } from '@emotion/react';
import React from 'react';

import Icon from '~/components/icon/Icon';
import { font } from '~/global_styles/global';
import { mediaQueryTypes } from '~/types';

export default function Story({ isPC, isTablet, isMobile }: mediaQueryTypes) {
    const landingStoryStyle = css`
        background: url(${require('~/images/bg-gradient.svg').default}) center
            center no-repeat;
        background-size: cover;
        display: flex;
        justify-content: ${isPC ? 'flex-end' : 'flex-start'};
        align-items: center;
        padding: ${isPC
            ? '187px 258px'
            : isTablet
            ? '187px 81px'
            : '69px 47px'};
        .text {
            text-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
            .title {
                ${isMobile
                    ? font('Inter', 700, 48, 58.09, 'var(--BASIC-WHITE)')
                    : font('Inter', 700, 65, 78.66, 'var(--BASIC-WHITE)')};
                margin-bottom: ${isMobile ? '36px' : '80px'};
                text-align: ${isMobile ? 'center' : 'left'};
            }
            .description {
                ${font('Noto', 400, 16, 36, 'var(--BASIC-WHITE)')}
                .bold {
                    ${font('Noto', 700, 16, 36, 'var(--BASIC-WHITE)')}
                }
            }
            .list {
                ${font('Noto', 600, 20, 38, 'var(--BASIC-WHITE)')}
                .checkIcon {
                }
            }
        }
    `;

    return (
        <div css={landingStoryStyle}>
            <div className={'text'}>
                <p className={'title'}>SOW Story</p>
                <p className={'description'}>
                    안녕하세요, SOW 연구소입니다. <br />
                    <span className={'bold'}>
                        Web3 세계에서 활동하는 여성 창작자가 매우 적다는
                        연구결과가 있었습니다.
                    </span>{' '}
                    <br />
                    잠재력 있는 여성 창작자들이 Web3에서 빛을 발하지 못하고 있던
                    것이죠. <br />
                    <span className={'bold'}>
                        그래서 저희는 Web3 우주공간 ‘SPACE OF WOMEN’을
                        마련했습니다!
                    </span>
                    <br />
                    이곳은 상상이 현실이 되는 곳입니다. 다양한 창작물이 모여
                    확장되고 운영되는 공간이에요.
                    <br /> 여러분이 만들어 갈 우주의 모습을 기대하며, 몇 가지
                    규칙을 알려드리겠습니다.
                    <br /> 이 공간을 만드는 여정에 함께해주시겠어요?
                    <br />{' '}
                    <span className={'bold'}>
                        여성 창작자와 함께하고 싶은 분이라면 누구든 환영합니다!
                    </span>
                </p>
                <ul className={'list'}>
                    <li>
                        <Icon
                            name={'icon-check-pink'}
                            size={24}
                            className={'checkIcon'}
                        />{' '}
                        각 행성에는 미션이 존재한다.
                    </li>
                    <li>
                        <Icon
                            name={'icon-check-pink'}
                            size={24}
                            className={'checkIcon'}
                        />{' '}
                        누구나 창작을 통해 미션에 참여할 수 있다.
                    </li>
                    <li>
                        <Icon
                            name={'icon-check-pink'}
                            size={24}
                            className={'checkIcon'}
                        />{' '}
                        미션 수행 결과는 공간에 실제로 반영된다.
                    </li>
                </ul>
                <p className={'description'}>
                    이 공간을 만드는 여정에 함께해주시겠어요? <br />
                    여성 창작자와 함께하고 싶은 분이라면 누구든 환영합니다!
                </p>
            </div>
        </div>
    );
}
