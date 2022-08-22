import { css } from '@emotion/react';
import React from 'react';

import Card from '~/components/card';
import CheckItem from '~/components/checkItem';
import { landingSectionStyle } from '~/components/landing/cindy';
import { mediaQueryTypes } from '~/types';

export default function Benefit({ isPC, isTablet, isMobile }: mediaQueryTypes) {
    const landingBenefitStyle = css`
        margin: ${isMobile ? '100px 0' : '200px 0'};
        ${landingSectionStyle(isMobile, isTablet)};
        .cards {
            display: flex;
            flex-direction: ${isPC ? 'row' : 'column'};
            justify-content: center;
            align-items: center;
            gap: 18px;
            width: 100%;
        }
    `;
    return (
        <div css={landingBenefitStyle}>
            <div className={'wrap'}>
                <p className={'title'}>RoadMap</p>
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
                            <p className={'cardTitle'}>FUN</p>
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
