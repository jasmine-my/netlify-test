import { css } from '@emotion/react';

import { font } from '~/global_styles/global';

const landingSectionStyle = (isMobile: boolean, isTablet: boolean) => css`
    box-sizing: border-box;
    width: 100%;
    min-height: 100vh;
    padding: 60px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    .wrap {
        width: ${isMobile ? '360px' : isTablet ? '60%' : '75%'};
        //min-width: ${!isMobile && !isTablet ? '1282px' : 'auto'};
        min-width: ${isMobile ? '360px' : isTablet ? 'auto' : '1282px'};
        opacity: 0;
        &.opacity {
            animation: opacity 1s ease-in-out forwards;
        }
        @keyframes opacity {
            from {
                transform: translateY(30%);
            }
            to {
                opacity: 1;
                transform: translateY(0);
                position: relative;
                z-index: 2;
            }
        }
    }
    .title {
        ${isMobile
            ? font('GoodTimes', 700, 32, 38.4, 'var(--BASIC-WHITE)')
            : font('GoodTimes', 700, 54, 64.8, 'var(--BASIC-WHITE)')};
        margin-bottom: ${isMobile ? '40px' : '80px'};
        text-align: center;
        position: relative;
    }
    .breakInMobileText {
        span:not(.black, .bold) {
            display: ${isTablet || isMobile ? 'block' : 'inline'};
        }
    }
`;

export default landingSectionStyle;
