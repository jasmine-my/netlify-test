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

    return (
        <div
            css={css`
                position: relative;
                min-width: ${isPC ? '1440px' : 0};
                overflow: hidden;
            `}
        >
            <div>
                <div>{props.children}</div>
                <Header />
            </div>
            <Footer />
        </div>
    );
}
