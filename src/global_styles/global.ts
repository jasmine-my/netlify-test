import { css } from '@emotion/react';

const globalStyles = css`
    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font-color: inherit;
        vertical-align: baseline;
        box-sizing: border-box;
    }
    /* HTML5 display-role reset for older browsers */
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol,
    ul {
        list-style: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
    button {
        padding: 0;
        text-decoration: none;
        font-family: inherit;
        font-size: inherit;
        font-weight: inherit;
        background: inherit;
        border: none;
        cursor: pointer;
    }
    input {
        border: none;
        outline: none;
    }
`;

export default globalStyles;

export const font = (
    fontFamily: 'Noto' | 'Inter' | 'GoodTimes' = 'Noto',
    weight: number,
    size: number,
    lineHeight: number,
    color: string
) => css`
    color: ${color};
    font-weight: ${weight};
    font-size: ${size}px;
    line-height: ${lineHeight}px;
    font-family: ${fontFamily === 'Noto'
            ? 'Noto Sans KR'
            : fontFamily === 'Inter'
            ? 'Inter'
            : 'GoodTimes'},
        sans-serif;
`;

export const mediaQuery = {
    PC: '(min-width:1024px)',
    TABLET: '(min-width:768px) and (max-width:1023px)',
    MOBILE: '(max-width:767px)',
};

export const pcMinWidth = '1400px';

export const mobileHeaderHeight = '71px';
export const headerHeight = '120px';
