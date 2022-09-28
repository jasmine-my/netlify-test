import { css } from '@emotion/react';
import React from 'react';
import Tilt from 'react-parallax-tilt';
import { useMediaQuery } from 'react-responsive';

import { font, mediaQuery } from '~/global_styles/global';

export interface IMemberCardProps {
    index: number;
    name: string;
    jd: string;
    experience: string;
}

const MemberCardStyle = (isMobile: boolean, index: number) => css`
    //width: ${isMobile ? '100%' : '223px'};
    height: 100%;
    border-radius: 20px;
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(1, auto);
    background-color: var(--BASIC-NAVY);

    :hover {
        cursor: pointer;
    }
    .profileImage {
        width: 100%;
        // width: ${isMobile ? '360px' : '223px'};
        height: ${isMobile ? '360px' : '223px'};
        background-image: url('assets/images/profiles/profile-${index}.jpg');
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 20px 20px 0 0;
        overflow: hidden;
    }
    .contents {
        width: 100%;
        height: 187px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 26.5px;
        .memberName {
            ${font(
                'Inter',
                700,
                isMobile ? 24 : 18,
                isMobile ? 29.05 : 21.78,
                'var(--BASIC-WHITE)'
            )};
            margin-bottom: ${isMobile ? '16px' : '24px'};
        }

        .memberJd {
            ${font('Inter', 700, 14, 17, 'var(--BASIC-WHITE)')};
            margin-bottom: 4px;
        }

        .memberEx {
            ${font(
                'Inter',
                400,
                isMobile ? 14 : 12,
                isMobile ? 16.94 : 14.52,
                'var(--BASIC-WHITE)'
            )};
        }
    }
`;

export default function MemberCard({
    index,
    name,
    jd,
    experience,
}: IMemberCardProps) {
    const isMobile = useMediaQuery({ query: mediaQuery.MOBILE });

    return (
        <Tilt>
            <div css={MemberCardStyle(isMobile, index)}>
                <div className={'profileImage'} />
                <div className={'contents'}>
                    <p className={'memberName'}>{name}</p>
                    <p className={'memberJd'}> {jd}</p>
                    <p className={'memberEx'}>{experience}</p>
                </div>
            </div>
        </Tilt>
    );
}
