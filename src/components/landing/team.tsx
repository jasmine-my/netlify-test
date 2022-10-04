import { css } from '@emotion/react';
import React, { MutableRefObject, useRef } from 'react';

import MemberCard from '~/components/card/memberCard';
import landingSectionStyle from '~/components/landing/landingsectionStyle';
import { font } from '~/global_styles/global';
import { team } from '~/information/teamInfo';
import { mediaQueryTypes } from '~/types';
import { useOffsetTop } from '~/useHooks/useScroll';

export default function Team({ isPC, isTablet, isMobile }: mediaQueryTypes) {
    // 블러 필터(filter: blur)가 사파리에서 계산량을 많이 차지하는 것 같습니다. (저사양 맥에서 끊김현상 발생)
    // 일단 ::before를 다 뺐습니다.
    const landingTeamStyle = css`
        ${landingSectionStyle(isMobile, isTablet)};
        .teamCards {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: ${isMobile ? '56px' : isTablet ? '60px 16px' : '80px 40px '};
            width: ${isPC ? '80%' : '100%'};
            margin: 0 auto;
            position: relative;
            z-index: 1;
            // ::before {
            //     position: absolute;
            //     z-index: -1;
            //     content: '';
            //     top: 50%;
            //     left: 50%;
            //     transform: translate(-50%, -50%);
            //     width: ${isPC ? '1058px' : 0};
            //     height: ${isPC ? '1058px' : 0};
            //     background: rgba(255, 255, 255, 0.3);
            //     filter: blur(200px);
            // }
        }
        .description {
            margin: ${isMobile ? '52px auto 0 auto' : '60px auto 0 auto'};
            ${isMobile
                ? font('Noto', 600, 16, 28, 'var(--BASIC-WHITE)')
                : font('Noto', 600, 18, 36, 'var(--BASIC-WHITE)')};
            text-align: center;
            z-index: 1;
            position: relative;
        }
    `;

    const ref = useRef() as MutableRefObject<HTMLDivElement | null>;
    const { isShow } = useOffsetTop(ref.current?.offsetTop);

    return (
        <div css={landingTeamStyle} ref={ref}>
            <div className={`wrap ${isShow ? 'opacity' : ''}`}>
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
                <div className={'description breakInMobileText'}>
                    <p>
                        <span>문화예술과 NFT에 관심이 많은 </span>
                        <span>팀원들이 함께합니다.</span>
                    </p>
                    <p>
                        <span>각자 팟캐스트, 공연, 글, 디자인까지</span>
                        <span>다양한 분야를 경험했어요.</span>
                    </p>
                    <br />
                    <p>
                        저희도 NFT가{' '}
                        <span>낯설고 어렵게 느껴질 때가 있었어요.</span>
                    </p>
                    <p>하지만 한 가지는 분명했습니다.</p>
                    <br />
                    <p>저희는 불편하고 어려운 커뮤니티 대신, </p>
                    <p>여성 창작자를 위한 포용적인 커뮤니티를 만들어 </p>
                    <p>
                        더 많은 여성들이 NFT 시장에서{' '}
                        <span>빛을 발할 수 있도록 지원하려고 합니다.</span>
                    </p>
                    <br />
                    <p>SOW Citizen으로 함께해주신다면,</p>
                    <p>더 큰 변화를 만들 수 있을 것이라고 믿습니다!</p>
                </div>
            </div>
        </div>
    );
}
