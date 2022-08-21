import { css } from '@emotion/react';
import React from 'react';

export default function Index() {
    return (
        <div
            css={css`
                background: var(--GRADIENT-BLUE);
            `}
        >
            Landing
            <p>Test3</p>
            <p>Test4</p>
        </div>
    );
}
