import { css } from '@emotion/react';
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-scroll';

import { headerStyle, snsIconStyle } from '~/components/header/style';
import Icon from '~/components/icon/Icon';
import { mediaQuery } from '~/global_styles/global';
import HeaderLogo from '~/images/logo-header.svg';

export default function Header() {
    const isPC = useMediaQuery({ query: mediaQuery.PC });
    const isTable = useMediaQuery({ query: mediaQuery.TABLET });
    const isMobile = useMediaQuery({ query: mediaQuery.MOBILE });

    const [isOpenedMenu, setIsOpenedMenu] = useState(false);

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
                <img className={'logo'} src={HeaderLogo} alt="header-logo" />

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
                            <li>
                                <Icon size={32} name={'sns-instagram'} />
                            </li>
                            <li>
                                <Icon size={32} name={'sns-discord'} />
                            </li>
                            <li>
                                <Icon size={32} name={'sns-twitter'} />
                            </li>
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
                    {menus.map((menu) => (
                        <Link
                            key={menu.id}
                            to={menu.id}
                            spy={true}
                            smooth={true}
                        >
                            <li>{menu.title}</li>
                        </Link>
                    ))}
                </ul>
            )}
        </div>
    );
}
