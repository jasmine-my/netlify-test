import styled from '@emotion/styled';
import React from 'react';

interface ICardProps {
    isMobile: boolean;
}

const Card = styled.div<ICardProps>`
    background: var(--OPACITY-WHITE);
    height: 100%;
    width: 100%;
    padding: ${(props) => (props.isMobile ? '56.05 29.43px' : '80px 42px')};
`;
export default Card;
