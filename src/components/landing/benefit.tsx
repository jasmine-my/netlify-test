import { css } from '@emotion/react';
import React, { MutableRefObject, useRef } from 'react';

import Card from '~/components/card';
import CheckItem from '~/components/checkItem';
import landingSectionStyle from '~/components/landing/landingsectionStyle';
import { mediaQueryTypes } from '~/types';
import { useOffsetTop } from '~/useHooks/useScroll';

export default function Benefit({ isPC, isTablet, isMobile }: mediaQueryTypes) {
    const landingBenefitStyle = css`
        ${landingSectionStyle(isMobile, isTablet)};
        .cards {
            display: grid;
            grid-template-columns: repeat(${isPC ? '3' : '1'}, 1fr);
            grid-template-rows: repeat(${isPC ? '1' : '3'}, auto);
            gap: 18px;
            width: 100%;
            height: 100%;
        }
        position: relative;
        .planet {
            position: absolute;
            z-index: 0;
            &.venus {
                top: ${isPC ? '-400px' : '-200px'};
                right: ${isPC ? '-800px' : isTablet ? '-1100px' : '-1200px'};
                background: url(${require('~/images/planet/planet-venus.svg')
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
        <div css={landingBenefitStyle} ref={ref}>
            <div className={'planet venus'} />
            <div className={`wrap ${isShow ? 'opacity' : ''}`}>
                <p className={'title'}>Benefit</p>
                <div className={'cards'}>
                    <Card isMobile={isMobile}>
                        <div>
                            <p className={'cardTitle'}>Earn</p>
                            <div className={'checkItems'}>
                                <CheckItem color={'navy'}>
                                    내 작품 NFT로 판매하기
                                </CheckItem>
                                <CheckItem color={'navy'}>
                                    Collab NFT 에어드랍 기회!
                                </CheckItem>
                                <CheckItem color={'navy'}>
                                    각종 문화예술 관람 혜택
                                </CheckItem>
                            </div>
                        </div>
                    </Card>
                    <Card isMobile={isMobile}>
                        <div>
                            <p className={'cardTitle'}>Create</p>
                            <div className={'checkItems'}>
                                <CheckItem color={'navy'}>
                                    나만의 NFT 발행 지원
                                </CheckItem>
                                <CheckItem color={'navy'}>
                                    연말 오프라인 전시 참여 기회
                                </CheckItem>
                                <CheckItem color={'navy'}>
                                    소유한 SOW NFT의 2차 상업적 사용 권한
                                </CheckItem>
                                <CheckItem color={'navy'}>
                                    커뮤니티 내 협업 시 금전적 지원
                                </CheckItem>
                            </div>
                        </div>
                    </Card>
                    <Card isMobile={isMobile}>
                        <div>
                            <p className={'cardTitle'}>Fun</p>
                            <div className={'checkItems'}>
                                <CheckItem color={'navy'}>
                                    내 작품으로 Space 넓혀가기
                                </CheckItem>
                                <CheckItem color={'navy'}>
                                    유명 아티스트 세미나
                                </CheckItem>
                                <CheckItem color={'navy'}>
                                    여성 프로젝트 공동 개더링 추진
                                </CheckItem>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
