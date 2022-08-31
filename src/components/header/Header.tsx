import { css } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-scroll';

import { headerStyle, snsIconStyle } from '~/components/header/style';
import Icon from '~/components/icon/Icon';
import { mediaQuery, mobileHeaderHeight } from '~/global_styles/global';
import HeaderLogo from '~/images/logo-header.svg';
import { urlInfo } from '~/information/urlInfo';
import useGetScrollPosition from '~/useHooks/useGetScrollPosition';

export default function Header() {
    const isPC = useMediaQuery({ query: mediaQuery.PC });
    const isTable = useMediaQuery({ query: mediaQuery.TABLET });
    const isMobile = useMediaQuery({ query: mediaQuery.MOBILE });

    const [isOpenedMenu, setIsOpenedMenu] = useState(false);
    const { scrollPosition } = useGetScrollPosition();
    useEffect(() => {
        if (scrollPosition > 0) setIsOpenedMenu(false);
    }, [scrollPosition]);

    const menus = [
        { id: 'story', title: 'Story' },
        { id: 'collection', title: 'Collection' },
        { id: 'roadmap', title: 'Roadmap' },
        { id: 'benefit', title: 'Benefit' },
        { id: 'team', title: 'Team' },
        { id: 'partner', title: 'Partner' },
    ];

    return (
        <div css={headerStyle(isOpenedMenu, isTable, isMobile)}>
            <div className={'wrap'}>
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
                                    offset={menu.id === 'roadmap' ? -60 : 0}
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
                                        onClick={() => window.open(sns.url)}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {(isTable || isMobile) && (
                    <Icon
                        css={css`
                            cursor: pointer;
                        `}
                        name={
                            isOpenedMenu ? 'hamburger-close' : 'hamburger-open'
                        }
                        size={isTable ? 72 : 36}
                        onClick={() => setIsOpenedMenu(!isOpenedMenu)}
                    />
                )}
            </div>
            {(isTable || isMobile) && isOpenedMenu && (
                <ul className={'gnbItems small'}>
                    {menus.map((menu) => {
                        if (menu.id === 'team') {
                            return (
                                <Link
                                    key={menu.id}
                                    to={menu.id}
                                    offset={-300}
                                    spy={true}
                                    smooth={true}
                                >
                                    <li>{menu.title}</li>
                                </Link>
                            );
                        } else {
                            return (
                                <Link
                                    key={menu.id}
                                    to={menu.id}
                                    offset={isMobile ? -150 : 0}
                                    spy={true}
                                    smooth={true}
                                >
                                    <li>{menu.title}</li>
                                </Link>
                            );
                        }
                    })}
                </ul>
            )}
        </div>
    );
}
