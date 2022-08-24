import { css } from '@emotion/react';

import {
    font,
    headerHeight,
    mobileHeaderHeight,
    pcMinWidth,
} from '~/global_styles/global';

export const headerStyle = (
    isOpenedMenu: boolean,
    isTablet: boolean,
    isMobile: boolean
) => css`
    z-index: 3;
    background-color: ${isOpenedMenu
        ? 'var(--BASIC-WHITE)'
        : 'var(--OPACITY-WHITE)'};
    width: 100%;
    margin: 0 auto;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.3s;
    .wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: ${isTablet || isMobile ? 'auto' : pcMinWidth};
        margin: 0 auto;
        height: ${isMobile ? mobileHeaderHeight : headerHeight};
        padding: ${isTablet || isMobile ? '0 16px' : '0'};
    }
    .logo {
        width: ${isMobile ? '104px' : '168px'};
    }
    .contents {
        display: flex;
        align-items: center;
        gap: 63px;
    }
    .gnbItems {
        display: flex;
        gap: 64px;
        ${font(
            'Inter',
            700,
            18,
            21.78,
            `${
                isTablet || isMobile
                    ? 'var(--BASIC-WHITE)'
                    : 'var(--BASIC-NAVY)'
            }`
        )};
        li {
            :hover {
                cursor: pointer;
                color: var(--SOW-GREEN);
                transition: color 0.2s ease-in-out;
            }
        }
        &.small {
            z-index: 100;
            background: var(--SOW-PURPLE);
            padding: 61px 0 61px 55px;
            flex-direction: column;
        }
    }
`;

export const snsIconStyle = css`
    display: flex;
    gap: 10px;
    li {
        cursor: pointer;
    }
`;
