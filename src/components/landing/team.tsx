import { css } from '@emotion/react';
import React from 'react';

import MemberCard from '~/components/card/memberCard';
import { landingSectionStyle } from '~/components/landing/cindy';
import { font } from '~/global_styles/global';
import { team } from '~/information/teamInfo';
import { mediaQueryTypes } from '~/types';

export default function Team({ isPC, isTablet, isMobile }: mediaQueryTypes) {
    const landingTeamStyle = css`
        margin: ${isMobile ? '100px 0' : '200px 0'};
        ${landingSectionStyle(isMobile, isTablet)};
        .teamCards {
            display: grid;
            grid-template-columns: ${isPC
                ? 'repeat(3, 1fr)'
                : 'repeat(1, 1fr)'};
            justify-content: center;
            align-items: center;
            gap: ${isPC ? '80px 40px ' : isTablet ? '80px' : '56px'};
            width: 100%;
        }
        .description {
            margin-top: ${isPC ? '80px' : isTablet ? '99px' : '52px'};
            ${isMobile
                ? font('Noto', 600, 16, 30, 'var(--BASIC-WHITE)')
                : font('Noto', 600, 28, 50, 'var(--BASIC-WHITE)')};
            text-align: ${isPC ? 'center' : 'start'};
        }
    `;
    return (
        <div css={landingTeamStyle}>
            <div className={'wrap'}>
                <p className={'title'}>Team</p>
                <div className={'teamCards'}>
                    {team.map((member) => (
                        <MemberCard
                            key={member.index}
                            index={member.index}
                            name={member.name}
                            jd={member.jd}
                            experience={member.experience}
                        />
                    ))}
                </div>
                <p className={'description'}>
                    문화예술과 NFT에 관심이 많은 6명의 팀원이 함께합니다.
                    <br />
                    각자 팟캐스트, 공연, 글, 디자인까지 다양한 분야를
                    경험했어요.
                    <br />
                    <br />
                    저희도 NFT가 낯설고 어렵게 느껴질 때가 있었어요. <br />
                    하지만 한 가지는 분명했습니다. <br />
                    <br />
                    저희는 불편하고 어려운 커뮤니티 대신, <br />
                    여성 창작자를 위한 포용적인 커뮤니티를 만들어 <br />
                    더 많은 여성들이 NFT 시장에서 빛을 발할 수 있도록 지원하려고
                    합니다. <br />
                    <br />
                    SOW Citizen으로 함께해주신다면, <br />더 큰 변화를 만들 수
                    있을 것이라고 믿습니다!
                </p>
            </div>
        </div>
    );
}
