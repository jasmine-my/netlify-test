import { css } from '@emotion/react';
import React, { useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Element } from 'react-scroll';

import kaikas from '~/components/web3/kaikas';

export default function Minting() {
    const getAccount = useCallback(async () => {
        const account = await kaikas.getAccount();
        console.log(account);
    }, []);

    return <div>minting page</div>;
}
