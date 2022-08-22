import { css } from '@emotion/react';

import {
    mobileFooterHeight,
    pcFooterHeight,
    tabletFooterHeight,
} from '~/components/footer/Footer';
import { font } from '~/global_styles/global';

export const footerStyle = (
    isPC: boolean,
    isTablet: boolean,
    isMobile: boolean
) => css`
    height: ${isPC
        ? pcFooterHeight
        : isTablet
        ? tabletFooterHeight
        : mobileFooterHeight};
    width: 100%;
    background: var(--BASIC-BLACK);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
        display: flex;
        align-items: ${isPC ? 'center' : 'flex-starts'};
        gap: ${isPC ? '32px' : isTablet ? '27px' : '14px'};
        flex-direction: ${isPC ? 'row' : 'column'};
        position: ${isPC ? 'relative' : 'absolute'};
        top: ${isTablet ? '44px' : '41px'};
        left: 16px;
        .logo {
            width: ${isMobile ? '97px' : '168px'};
            height: 47px;
        }
        .copyright {
            li:nth-of-type(1) {
                ${isMobile
                    ? font('Inter', 400, 12, 14.52, 'var(--BASIC-WHITE)')
                    : font('Inter', 400, 17, 20.57, 'var(--BASIC-WHITE)')};
                margin-bottom: 11px;
            }
            li:nth-of-type(2) {
                ${isMobile
                    ? font('Inter', 400, 12, 14.52, 'var(--BASIC-GREY-2)')
                    : font('Inter', 400, 16, 19.36, 'var(--BASIC-GREY-2)')}
            }
        }
    }
    .snsIcons {
        position: ${isPC ? 'relative' : 'absolute'};
        bottom: ${isTablet ? '25px' : '32.98px'};
        right: 16px;
    }
`;
