import { css } from '@emotion/react';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

import Footer, {
    mobileFooterHeight,
    pcFooterHeight,
    tabletFooterHeight,
} from '~/components/footer/Footer';
import Header from '~/components/header/Header';
import { mediaQuery } from '~/global_styles/global';

export default function Layout(props: { children: React.ReactNode }) {
    const isPC = useMediaQuery({ query: mediaQuery.PC });
    const isTablet = useMediaQuery({ query: mediaQuery.TABLET });

    return (
        <div
            css={css`
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                min-width: ${isPC ? '1440px' : 0};
                height: 100vh;
                margin-bottom: ${isPC
                    ? pcFooterHeight
                    : isTablet
                    ? tabletFooterHeight
                    : mobileFooterHeight};
                .main {
                    height: 100%;
                }
            `}
        >
            <div>
                <div className={'main'}>{props.children}</div>
                <Header />
            </div>
            <Footer />
        </div>
    );
}
