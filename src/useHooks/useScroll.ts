import { useEffect, useState } from 'react';

const useScroll = () => {
    const [state, setState] = useState({
        x: 0,
        y: 0,
    });

    const onScroll = () => {
        setState({ x: window.scrollX, y: window.scrollY });
    };
    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return state;
};

export const useOffsetTop = (offsetTop: number | undefined) => {
    const { y } = useScroll();
    const [isShow, setIsShow] = useState(false);
    useEffect(() => {
        if (offsetTop && y > offsetTop - 300) setIsShow(true);
    }, [y, offsetTop]);

    return { isShow };
};

export default useScroll;
