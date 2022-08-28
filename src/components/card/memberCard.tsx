import { css } from '@emotion/react';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { font, mediaQuery } from '~/global_styles/global';

export interface IMemberCardProps {
    index: number;
    name: string;
    jd: string;
    experience: string;
}

export default function MemberCard({
    index,
    name,
    jd,
    experience,
}: IMemberCardProps) {
    const isTablet = useMediaQuery({ query: mediaQuery.TABLET });
    const isMobile = useMediaQuery({ query: mediaQuery.MOBILE });

    return (
        <div
            css={css`
                width: 100%;
                height: 100%;
                border-radius: 20px;
                overflow: hidden;
                display: grid;
                grid-template-columns: repeat(
                    ${isMobile ? '326px' : isTablet ? '435px' : '300px'} auto
                );
                background-color: var(--BASIC-NAVY);

                :hover {
                    transform: scale(0.98);
                    box-shadow: 0 0 5px -2px rgba(0, 0, 0, 0.3);
                    cursor: pointer;
                    transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
                    .contents {
                        transform: translateY(-10px);
                        transition: all 900ms cubic-bezier(0.19, 1, 0.22, 1);
                    }
                }
                .profileImage {
                    width: 100%;
                    height: ${isMobile
                        ? '326px'
                        : isTablet
                        ? '435px'
                        : '300px'};
                    background-image: url('assets/images/profiles/profile-${index}.png');
                    background-position: center center;
                    background-size: cover;
                    background-repeat: no-repeat;
                    border-radius: 20px 20px 0 0;
                    overflow: hidden;
                }
                .contents {
                    width: 100%;
                    height: 100%;
                    text-align: center;
                    padding: ${isMobile ? '36px 16px' : '52px 47.5px'};
                    .memberName {
                        ${font(
                            'Inter',
                            700,
                            isMobile ? 24 : 30,
                            isMobile ? 29.05 : 36.31,
                            'var(--BASIC-WHITE)'
                        )};
                        margin-bottom: ${isMobile ? '16px' : '24px'};
                    }

                    .memberJd {
                        ${font(
                            'Inter',
                            700,
                            isMobile ? 14 : 18,
                            isMobile ? 16.94 : 21.78,
                            'var(--BASIC-WHITE)'
                        )};
                        margin-bottom: 4px;
                    }

                    .memberEx {
                        ${font(
                            'Inter',
                            400,
                            isMobile ? 14 : 18,
                            isMobile ? 16.94 : 21.78,
                            'var(--BASIC-WHITE)'
                        )};
                        height: ${isMobile ? '34px' : '48px'};
                    }
                }
            `}
        >
            <div className={'profileImage'} />
            <div className={'contents'}>
                <p className={'memberName'}>{name}</p>
                <p className={'memberJd'}> {jd}</p>
                <p className={'memberEx'}>{experience}</p>
            </div>
        </div>
    );
}
