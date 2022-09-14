import { css } from '@emotion/react';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Element } from 'react-scroll';

import Benefit from '~/components/landing/benefit';
import Cindy from '~/components/landing/cindy';
import Collection from '~/components/landing/collection';
import Main from '~/components/landing/main';
import Partner from '~/components/landing/partner';
import RoadMap from '~/components/landing/roadmap';
import Story from '~/components/landing/story';
import Team from '~/components/landing/team';
import { mediaQuery } from '~/global_styles/global';

export default function Landing() {
    const isPC = useMediaQuery({ query: mediaQuery.PC });
    const isTablet = useMediaQuery({ query: mediaQuery.TABLET });
    const isMobile = useMediaQuery({ query: mediaQuery.MOBILE });

    return (
        <div>
            <Element name={'main'}>
                <Main isPC={isPC} isTablet={isTablet} isMobile={isMobile} />
            </Element>
            <Element name={'story'} id={'story'}>
                <Story isPC={isPC} isMobile={isMobile} isTablet={isTablet} />
            </Element>
            <div
                css={css`
                    background: var(--GRADIENT-BLUE);
                `}
            >
                <Cindy isPC={isPC} isTablet={isTablet} isMobile={isMobile} />
                <Element name={'collection'}>
                    <Collection
                        isPC={isPC}
                        isTablet={isTablet}
                        isMobile={isMobile}
                    />
                </Element>
                <Element name={'roadmap'}>
                    <RoadMap
                        isPC={isPC}
                        isTablet={isTablet}
                        isMobile={isMobile}
                    />
                </Element>
                <Element name={'benefit'}>
                    <Benefit
                        isPC={isPC}
                        isTablet={isTablet}
                        isMobile={isMobile}
                    />
                </Element>
                <Element name={'team'}>
                    <Team isPC={isPC} isTablet={isTablet} isMobile={isMobile} />
                </Element>
                <Element name={'partner'}>
                    <Partner
                        isPC={isPC}
                        isTablet={isTablet}
                        isMobile={isMobile}
                    />
                </Element>
            </div>
        </div>
    );
}
