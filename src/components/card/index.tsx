import styled from '@emotion/styled';
import React from 'react';

import { font } from '~/global_styles/global';

interface ICardProps {
    isMobile: boolean;
}

const Card = styled.div<ICardProps>`
    height: 100%;
    width: 100%;
    padding: ${(props) => (props.isMobile ? '56px 20px' : '60px 30px')};
    overflow: hidden;
    background: var(--OPACITY-WHITE);
    border-radius: ${(props) => (props.isMobile ? '14px' : '20px')};
    position: relative;
    box-sizing: border-box;
    backdrop-filter: blur(5px);

    .cardTitle {
        text-align: left;
        margin-bottom: ${(props) => (props.isMobile ? '37.41px' : '54px')};
        ${(props) =>
            props.isMobile
                ? font('Inter', 700, 28, 33.89, 'var(--BASIC-GREY-1)')
                : font('Inter', 700, 32, 38.73, 'var(--BASIC-GREY-1)')}
    }

    :hover {
        background: var(--BASIC-WHITE);
        transform: scale(0.98);
        box-shadow: 0 0 5px -2px rgba(0, 0, 0, 0.3);
        cursor: pointer;
        transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
        .cardTitle {
            transform: translateY(5px);
            transition: all 900ms cubic-bezier(0.19, 1, 0.22, 1);
        }
        .checkItems {
            transform: translateY(-5px);
            transition: all 900ms cubic-bezier(0.19, 1, 0.22, 1);
        }
    }
`;
export default Card;
