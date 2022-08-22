import { css } from '@emotion/react';
import React from 'react';

import MemberCard from '~/components/card/memberCard';
import { landingSectionStyle } from '~/components/landing/cindy';
import { team } from '~/components/landing/teamInfo';
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
            gap: 40px;
            width: 100%;
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
            </div>
        </div>
    );
}
