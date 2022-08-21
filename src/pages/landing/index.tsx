import React from 'react';
import { useMediaQuery } from 'react-responsive';

import Main from '~/components/landing/main';
import Story from '~/components/landing/story';
import { mediaQuery } from '~/global_styles/global';

export default function Landing() {
    const isPC = useMediaQuery({ query: mediaQuery.PC });
    const isTablet = useMediaQuery({ query: mediaQuery.TABLET });
    const isMobile = useMediaQuery({ query: mediaQuery.MOBILE });

    return (
        <div>
            <Main isPC={isPC} isTablet={isTablet} isMobile={isMobile} />
            <Story isPC={isPC} isMobile={isMobile} isTablet={isTablet} />
        </div>
    );
}
