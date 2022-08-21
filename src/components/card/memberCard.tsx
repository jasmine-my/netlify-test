import { css } from '@emotion/react';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { font, mediaQuery } from '~/global_styles/global';

interface IMemberCardProps {
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
    const isMobile = useMediaQuery({ query: mediaQuery.MOBILE });

    return (
        <div
            css={css`
                width: 100%;
                height: 100%;
                border-radius: 20px;
                overflow: hidden;
                .profileImage {
                    background: url('/assets/images/profile-${index}.svg')
                        center center no-repeat;
                    background-size: contain;
                }
                .contents {
                    background: var(--BASIC-NAVY);
                    text-align: center; 
                    padding: ${isMobile ? '36px 16px' : '52px 47.5px'}
                    p:nth-of-type(1) {
                        ${font(
                            'Inter',
                            700,
                            isMobile ? 24 : 30,
                            isMobile ? 29.05 : 36.31,
                            'var(--BASIC-WHITE)'
                        )};
                        margin-bottom: ${isMobile ? '16px' : '24px'};
                    }
                    p:nth-of-type(2) {
                        ${font(
                            'Inter',
                            700,
                            isMobile ? 14 : 18,
                            isMobile ? 16.94 : 21.78,
                            'var(--BASIC-WHITE)'
                        )};
                        margin-bottom: 4px;
                    }
                    p:nth-of-type(3) {
                        ${font(
                            'Inter',
                            400,
                            isMobile ? 16.94 : 30,
                            isMobile ? 16.94 : 36.31,
                            'var(--BASIC-WHITE)'
                        )};
                        height: ${isMobile ? '34px' : '48px'};
                    }
                }
            `}
        >
            <div className={'profileImage'} />
            <div className={'contents'}>
                <p>{name}</p>
                <p>{jd}</p>
                <p>{experience}</p>
            </div>
        </div>
    );
}
