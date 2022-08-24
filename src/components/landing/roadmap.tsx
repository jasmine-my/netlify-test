import { css } from '@emotion/react';
import React from 'react';

import Card from '~/components/card';
import CheckItem from '~/components/checkItem';
import { landingSectionStyle } from '~/components/landing/cindy';
import { mediaQueryTypes } from '~/types';

export default function RoadMap({ isPC, isTablet, isMobile }: mediaQueryTypes) {
    const landingRoadmapStyle = css`
        margin: ${isMobile ? '100px 0' : '200px 0'};
        ${landingSectionStyle(isMobile, isTablet)};
        .cards {
            display: grid;
            grid-template-columns: repeat(${isPC ? '3' : '1'}, 1fr);
            grid-template-rows: repeat(${isPC ? '1' : '3'}, 1fr);
            gap: 18px;
            width: 100%;
            height: 100%;
        }
    `;
    return (
        <div css={landingRoadmapStyle}>
            <div className={'wrap'}>
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
