import { useEffect, useState } from 'react';

interface IKeyPress {
    key: string
}

export const useKeyPress = (targetKey: any) => {
    const [keyPressed, setKeyPressed] = useState<boolean>(false);

    const downHandler = ({ key }: IKeyPress) => {
        if (key === targetKey) {
            setKeyPressed(true);
        }
    };

    const upHandler = ({ key }: IKeyPress) => {
        setKeyPressed(false);
    };

    useEffect(() => {
        window.addEventListener('keydown', downHandler);
        window.addEventListener('keyup', upHandler);
        return () => {
            window.removeEventListener('keydown', downHandler);
            window.removeEventListener('keyup', upHandler);
        };
    }, [downHandler, upHandler]);
    return keyPressed;
};