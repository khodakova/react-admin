import React, { useEffect, useState } from 'react';

interface IKeyPress {
    key: string
}

export const useKeyClick = (targetKey: any) => {
    const [keyClicked, setKeyClicked] = useState<boolean>();

    const onKeyDown = (keyEvent: any) => {
        if (keyEvent.key === targetKey) {
            if (keyClicked) {
                console.log('in if')
                setKeyClicked(false);
            } else {
                console.log('in else')
                setKeyClicked(true);
            }

            // console.log(!keyClicked)
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown, false);
        return () => {
            document.removeEventListener('keydown', onKeyDown, false);
        };
    }, []);

    return {keyClicked, onKeyDown};
};