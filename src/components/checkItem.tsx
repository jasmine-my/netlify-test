import { css } from '@emotion/react';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

import Icon from '~/components/icon/Icon';
import { font, mediaQuery } from '~/global_styles/global';

interface ICheckItemProps {
    color: string;
    children: React.ReactNode;
}

const CheckItem = ({ color, children }: ICheckItemProps) => {
    const isMobile = useMediaQuery({ query: mediaQuery.MOBILE });
    return (
        <div
            css={css`
                ${isMobile
                    ? font('Noto', 600, 14.01, 28.03, 'var(--BASIC-GREY-1)')
                    : font('Noto', 600, 20, 40, 'var(--BASIC-GREY-1)')};
                margin-bottom: ${isMobile ? '6.93px' : '10px'};
                display: flex;
                justify-content: flex-start;
                align-items: center;
                gap: ${isMobile ? '8.31px' : '12px'};
            `}
        >
            <Icon name={`icon-check-${color}`} size={isMobile ? 16.82 : 24} />
            {children}
        </div>
    );
};

export default CheckItem;
