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
        .wrap {
            width: 100%;
        }
        .teamCards {
            display: grid;
            grid-template-columns: ${isMobile
                ? 'repeat(1, 1fr)'
                : 'repeat(3, 1fr)'};
            justify-content: center;
            justify-items: center;
            align-items: center;
            gap: ${isMobile ? '56px' : '60px 16px '};
            width: ${isMobile ? '100%' : '701px'};
            height: ${isMobile ? 'auto' : '880px'};
            margin: 0 auto;
        }
        .description {
            margin-top: ${isMobile ? '52px' : '60px'};
            ${isMobile
                ? font('Noto', 600, 16, 28, 'var(--BASIC-WHITE)')
                : font('Noto', 600, 18, 36, 'var(--BASIC-WHITE)')};
            text-align: center;
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
