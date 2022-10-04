import { css } from '@emotion/react';
import React from 'react';
import Tilt from 'react-parallax-tilt';

import { font } from '~/global_styles/global';

const CardStyle = (isMobile: boolean) => css`
    height: 100%;
    width: 100%;
    padding: ${isMobile ? '56px 20px' : '60px 30px'};
    overflow: hidden;
    background: var(--OPACITY-WHITE);
    border-radius: ${isMobile ? '14px' : '20px'};
    position: relative;
    box-sizing: border-box;
    backdrop-filter: blur(5px);

    .cardTitle {
        text-align: left;
        margin-bottom: ${isMobile ? '37.41px' : '54px'};
        ${isMobile
            ? font('Inter', 700, 28, 33.89, 'var(--BASIC-GREY-1)')
            : font('Inter', 700, 32, 38.73, 'var(--BASIC-GREY-1)')}
    }
    :hover {
        cursor: pointer;
    }
`;

interface ICardProps {
    isMobile: boolean;
    children: React.ReactNode;
}

export default function Card({ isMobile, children }: ICardProps) {
    return (
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={5} transitionSpeed={1000}>
            <div css={CardStyle(isMobile)}>{children}</div>
        </Tilt>
    );
}
