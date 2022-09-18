import { css } from '@emotion/react';
import React, { MutableRefObject, useRef } from 'react';

import Card from '~/components/card';
import CheckItem from '~/components/checkItem';
import landingSectionStyle from '~/components/landing/landingsectionStyle';
import { mediaQueryTypes } from '~/types';
import { useOffsetTop } from '~/useHooks/useScroll';

export default function RoadMap({ isPC, isTablet, isMobile }: mediaQueryTypes) {
    const landingRoadmapStyle = css`
        ${landingSectionStyle(isMobile, isTablet)};
        .cards {
            display: grid;
            grid-template-columns: repeat(${isPC ? '3' : '1'}, 1fr);
            grid-template-rows: repeat(${isPC ? '1' : '3'}, auto);
            gap: 18px;
            min-width: ${isPC ? '1000px' : '100%'};
            margin: 0 auto;
            height: 100%;
            position: relative;
            z-index: 10;
        }
        position: relative;
        .planet {
            position: absolute;
            z-index: 0;
            &.moon {
                top: ${isMobile ? '-400px' : '-490px'};
                left: ${isPC ? '-1000px' : isTablet ? '-1100px' : '-1200px'};
                background: url(${require('~/images/planet/planet-moon.svg')
                        .default})
                    no-repeat center center;
                background-size: contain;
                width: 1877px;
                height: 1055px;
            }
        }
    `;

    const ref = useRef() as MutableRefObject<HTMLDivElement | null>;
    const { isShow } = useOffsetTop(ref.current?.offsetTop);

    return (
        <div css={landingRoadmapStyle} ref={ref}>
            <div className={'planet moon'} />
            <div className={`wrap ${isShow ? 'opacity' : ''}`}>
                <p className={'title'}>RoadMap</p>
                <div className={'cards'}>
                    <Card isMobile={isMobile}>
                        <div>
                            <p className={'cardTitle'}>For Mission</p>
                            <div className={'checkItems'}>
                                <CheckItem color={'pink'}>
                                    1차 콜렉션 30%, 50% 판매 시 기부
                                </CheckItem>
                                <CheckItem color={'pink'}>
                                    판매 수익의 5% 여성 아티스트 작품 구매
                                </CheckItem>
                                <CheckItem color={'pink'}>
                                    판매 수익의 10% 커뮤니티 내 협업 지원{' '}
                                </CheckItem>
                            </div>
                        </div>
                    </Card>
                    <Card isMobile={isMobile}>
                        <div>
                            <p className={'cardTitle'}>For Holders</p>
                            <div className={'checkItems'}>
                                <CheckItem color={'pink'}>
                                    SOW 실물 시민증이 집으로!
                                </CheckItem>
                                <CheckItem color={'pink'}>
                                    창작자들을 위한 NFT 세미나
                                </CheckItem>
                                <CheckItem color={'pink'}>
                                    전시회 티켓 무료 에어드랍
                                </CheckItem>
                                <CheckItem color={'pink'}>
                                    유명 아티스트 세미나
                                </CheckItem>
                                <CheckItem color={'pink'}>
                                    SOW citizens 오프라인 네트워킹 파티
                                </CheckItem>
                                <CheckItem color={'pink'}>
                                    여성 프로젝트 공동 개더링 추진
                                </CheckItem>
                                <CheckItem color={'pink'}>
                                    아직 공개되지 않은 무언가!
                                </CheckItem>
                            </div>
                        </div>
                    </Card>
                    <Card isMobile={isMobile}>
                        <div>
                            <p className={'cardTitle'}>For Brand</p>
                            <div className={'checkItems'}>
                                <CheckItem color={'pink'}>
                                    SOW special Film 공개
                                </CheckItem>
                                <CheckItem color={'pink'}>
                                    SOW special Novel 공개
                                </CheckItem>
                                <CheckItem color={'pink'}>
                                    국내 랜드마크 오프라인 광고
                                </CheckItem>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
