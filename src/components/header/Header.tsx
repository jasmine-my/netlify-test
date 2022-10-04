import { css } from '@emotion/react';
import React, { useCallback, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-scroll';

import { headerStyle, snsIconStyle } from '~/components/header/style';
import Icon from '~/components/icon/Icon';
import { mediaQuery } from '~/global_styles/global';
import HeaderLogo from '~/images/logo-header.svg';
import { urlInfo } from '~/information/urlInfo';

/*
스크롤 위치가 변경될 때 마다 state가 업데이트 되면 cpu에 불필요한 비용(부담)이 많이 발생하게 됩니다
lastScrollPosition의 경우 JSX 부분과 관련이 없기 때문에 일반 변수로 선언하여 사용하는 것이 더 낫습니다
*/
let lastScrollPosition = 0;

export default function Header() {
    const isPC = useMediaQuery({ query: mediaQuery.PC });
    const isTablet = useMediaQuery({ query: mediaQuery.TABLET });
    const isMobile = useMediaQuery({ query: mediaQuery.MOBILE });

    const [isOpenedMenu, setIsOpenedMenu] = useState(false);
    const [showHeader, setShowHeader] = useState(true);

    const handleScroll = useCallback(() => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 0) setIsOpenedMenu(false);
        if (scrollPosition < 300) {
            setShowHeader(true);
        } else if (scrollPosition < lastScrollPosition) {
            setShowHeader(true);
        } else {
            setShowHeader(false);
        }
        lastScrollPosition = window.scrollY;
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    const menus = [
        { id: 'story', title: 'Story' },
        { id: 'collection', title: 'Collection' },
        { id: 'roadmap', title: 'Roadmap' },
        { id: 'benefit', title: 'Benefit' },
        { id: 'team', title: 'Team' },
        { id: 'partner', title: 'Partner' },
    ];
    return (
        <div css={headerStyle(isOpenedMenu, isTablet, isMobile)}>
            <div className={`wrap ${showHeader ? 'scrollUp' : 'scrollDown'}`}>
                <Link key={'main'} to={'main'} spy={true} smooth={true}>
                    <img
                        className={'logo'}
                        src={HeaderLogo}
                        alt="header-logo"
                    />
                </Link>

                {isPC && (
                    <div className={'contents'}>
                        <ul className={'gnbItems'}>
                            {menus.map((menu) => (
                                <Link
                                    key={`menu-${menu.id}`}
                                    to={menu.id}
                                    spy={true}
                                    smooth={true}
                                >
                                    <li>{menu.title}</li>
                                </Link>
                            ))}
                        </ul>
                        <ul css={snsIconStyle}>
                            {urlInfo.map((sns) => (
                                <li key={sns.name}>
                                    <Icon
                                        size={32}
                                        name={`sns-${sns.name}`}
                                        hoverEffect
                                        onClick={() => window.open(sns.url)}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {(isTablet || isMobile) && (
                    <Icon
                        css={css`
                            cursor: pointer;
                        `}
                        name={
                            isOpenedMenu ? 'hamburger-close' : 'hamburger-open'
                        }
                        size={isTablet ? 45 : 40}
                        onClick={() => setIsOpenedMenu(!isOpenedMenu)}
                    />
                )}
            </div>
            {(isTablet || isMobile) && isOpenedMenu && (
                <ul className={'gnbItems small'}>
                    {menus.map((menu) => {
                        return (
                            <Link
                                key={menu.id}
                                to={menu.id}
                                spy={true}
                                smooth={true}
                            >
                                <li>{menu.title}</li>
                            </Link>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}
