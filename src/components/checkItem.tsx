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
                    ? font('Noto', 600, 14, 27.71, 'var(--BASIC-GREY-1)')
                    : font('Noto', 600, 18, 30, 'var(--BASIC-GREY-1)')};
                margin-bottom: ${isMobile ? '6.93px' : '20px'};
                display: grid;
                grid-template-columns: ${isMobile ? '16.81px' : '21px'} auto;
                align-items: center;
                gap: ${isMobile ? '5px' : '12px'};
                text-align: start;
                overflow: hidden;
            `}
        >
            <Icon name={`icon-check-${color}`} size={isMobile ? 16.82 : 21} />
            {children}
        </div>
    );
};

export default CheckItem;
