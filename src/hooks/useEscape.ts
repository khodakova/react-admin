import { useCallback, useState } from 'react';

export const useEscape = (fn: (...arg: any) => void) => {
    const escFunction = useCallback((event: any) => {
        if (event.keyCode === 27) {
            fn();
        }
    }, []);

    return { escFunction };
};