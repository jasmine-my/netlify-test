import { css } from '@emotion/react';

import { font, headerHeight, mobileHeaderHeight } from '~/global_styles/global';

export const headerStyle = (
    isOpenedMenu: boolean,
    isTablet: boolean,
    isMobile: boolean
) => css`
    z-index: 3;
    width: 100%;
    margin: 0 auto;
    position: fixed;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    transition: all 0.3s;
    .scrollDown {
        animation: scrollDown 0.5s cubic-bezier(0.5, 0, 0.1, 1) both;
    }
    .scrollUp {
        animation: scrollUp 0.5s cubic-bezier(0.5, 0, 0.1, 1) both;
    }
    @keyframes scrollDown {
        from {
            opacity: 1;
            transform: translateY(100%);
        }
        to {
            opacity: 0;
        }
    }
    @keyframes scrollUp {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
            transform: translateY(100%);
        }
    }

    .wrap {
        background-color: var(--BASIC-WHITE);
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: auto;
        margin: 0 auto;
        min-height: ${isMobile ? mobileHeaderHeight : headerHeight};
        padding: ${isTablet || isMobile ? '0 16px' : '0 20px'};
    }
    .logo {
        width: ${isMobile ? '104px' : '168px'};
        cursor: pointer;
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
            :is(:hover, :active) {
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
