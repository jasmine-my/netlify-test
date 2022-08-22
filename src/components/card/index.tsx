import styled from '@emotion/styled';
import React from 'react';

import { font } from '~/global_styles/global';

interface ICardProps {
    isMobile: boolean;
}

const Card = styled.div<ICardProps>`
    height: ${(props) => (props.isMobile ? '401px' : '579px')};
    width: 100%;
    padding: ${(props) => (props.isMobile ? '56.05px 29.43px' : '80px 42px')};
    overflow: hidden;
    background: var(--OPACITY-WHITE);
    border-radius: ${(props) => (props.isMobile ? '14px' : '20px')};
    border: 3px solid pink;
    // background: url(${require('~/images/bg-card.svg')
        .default}) 0 0 no-repeat;
    // background-size: contain;
    .cardTitle {
        text-align: left;
        margin-bottom: ${(props) => (props.isMobile ? '37.41px' : '54px')};
        ${(props) =>
            props.isMobile
                ? font('Inter', 700, 28.03, 33.92, 'var(--BASIC-GREY-1)')
                : font('Inter', 700, 40, 48.41, 'var(--BASIC-GREY-1)')}
    }
`;
export default Card;
