import { css } from '@emotion/react';
import React, { MutableRefObject, useEffect, useRef } from 'react';
import Draggable from 'react-draggable';

import Icon from '~/components/icon/Icon';
import landingSectionStyle from '~/components/landing/landingsectionStyle';
import { font } from '~/global_styles/global';
import background from '~/images/bg-gradient.png';
import { mediaQueryTypes } from '~/types';
import { useOffsetTop } from '~/useHooks/useScroll';

export default function Story({ isPC, isTablet, isMobile }: mediaQueryTypes) {
    const landingStoryStyle = css`
        ${landingSectionStyle(isMobile, isTablet)};
        background: url(${background}) var(--SOW-BLUE) center center no-repeat;
        background-size: cover;
        position: relative;
        .planet {
            position: absolute;
            cursor: pointer;
            border-radius: 50%;
            z-index: 1;
            display: inline-block;
            &.saturn {
                left: ${isPC ? '8%' : isTablet ? '-40%' : '-100%'};
                background: url(${require('~/images/planet/planet-saturn.svg')
                        .default})
                    no-repeat center center;
                background-size: contain;
                width: 500px;
                height: 500px;
                border-radius: 0;
            }

            &.jupiter {
                right: ${isPC ? '0' : isTablet ? '-50%' : '100%'};
                top: -50px;
                background: url(${require('~/images/planet/planet-jupiter.svg')
                        .default})
                    no-repeat center center;
                background-size: contain;
                width: 740px;
                height: 740px;
            }

            &.mars {
                right: ${isMobile ? '100%' : '5%'};
                bottom: ${isPC ? '10%' : isTablet ? '20%' : '0'};
                background: url(${require('~/images/planet/planet-mars.svg')
                        .default})
                    no-repeat center center;
                background-size: contain;
                width: 300px;
                height: 300px;
            }
        }
        .text {
            text-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-items: center;

            .description {
                ${font('Noto', 400, 16, 36, 'var(--BASIC-WHITE)')}
                .bold {
                    ${font('Noto', 700, 16, 36, 'var(--BASIC-WHITE)')};
                }
            }
            .checkList {
                z-index: 2;
                margin: ${isMobile ? '24px 0' : '48px 0'};
                ${isMobile
                    ? font('Noto', 600, 16, 38, 'var(--BASIC-WHITE)')
                    : font('Noto', 600, 20, 38, 'var(--BASIC-WHITE)')};
                li {
                    display: grid;
                    grid-template-columns: repeat(
                        2,
                        ${isMobile ? '14px' : '21px'} auto
                    );
                    justify-content: start;
                    align-items: center;
                    gap: ${isMobile ? '5px' : '13.5px'};
                }
            }
        }
        .wrap {
            width: ${isMobile ? '360px' : isTablet ? '60%' : '700px'};
            min-width: ${!isMobile && !isTablet ? '700px' : 'auto'};
        }
    `;

    const nodeRef = useRef(null);
    useEffect(() => {}, []);

    const ref = useRef() as MutableRefObject<HTMLDivElement | null>;
    const { isShow } = useOffsetTop(ref.current?.offsetTop);

    return (
        <div css={landingStoryStyle} ref={ref}>
            <div className={`text wrap ${isShow ? 'opacity' : ''}`}>
                <p className={'title'}>SOW Story</p>
                <div className={'description breakInMobileText'}>
                    안녕하세요, SOW 연구소입니다.
                    <br />
                    <span className={'bold'}>
                        Web3 세계에서 활동하는 여성 창작자가 매우 적다는
                        연구결과가 있었습니다.
                    </span>{' '}
                    잠재력 있는 여성 창작자들이 Web3에서 빛을 발하지 못하고 있던
                    것이죠.
                    <br />
                    {(isTablet || isMobile) && <br />}
                    <p className={'bold'}>
                        그래서 저희는 Web3 우주공간{' '}
                        <span>‘SPACE OF WOMEN’을 마련했습니다!</span>
                    </p>
                    <p>
                        이곳은 상상이 현실이 되는 곳입니다.{' '}
                        <span>
                            다양한 창작물이 모여 확장되고 운영되는 공간이에요.
                        </span>
                    </p>
                    <p>
                        <span>여러분이 만들어 갈 우주의 모습을 기대하며, </span>
                        <span>몇 가지 규칙을 알려드리겠습니다.</span>
                    </p>
                </div>
                <ul className={'checkList'}>
                    <li>
                        <Icon
                            name={'icon-check-pink'}
                            size={isMobile ? 14 : 21}
                            className={'checkIcon'}
                        />{' '}
                        각 행성에는 미션이 존재한다.
                    </li>
                    <li>
                        <Icon
                            name={'icon-check-pink'}
                            size={isMobile ? 14 : 21}
                            className={'checkIcon'}
                        />{' '}
                        누구나 창작을 통해 미션에 참여할 수 있다.
                    </li>
                    <li>
                        <Icon
                            name={'icon-check-pink'}
                            size={isMobile ? 14 : 21}
                            className={'checkIcon'}
                        />{' '}
                        미션 수행 결과는 공간에 실제로 반영된다.
                    </li>
                </ul>
                <div className={'description breakInMobileText'}>
                    <p className={'bold'}>
                        이 공간을 만드는 여정에 함께해주시겠어요?
                        <br /> 여성 창작자와 함께하고 싶은 분이라면{' '}
                        <span>누구든 환영합니다!</span>
                    </p>
                </div>
            </div>
            <Draggable nodeRef={nodeRef} defaultClassName={'planets'}>
                <div ref={nodeRef} className={'planet saturn'} />
            </Draggable>
            <Draggable nodeRef={nodeRef}>
                <div ref={nodeRef} className={'planet jupiter'} />
            </Draggable>
            <Draggable nodeRef={nodeRef}>
                <div ref={nodeRef} className={'planet mars'} />
            </Draggable>
        </div>
    );
}
