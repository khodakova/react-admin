import { useState } from 'react';

export const useCapsLock = () => {
    const [caps, setCaps] = useState(false);

    const onKeyDown = (keyEvent: any) => {
        if (keyEvent.key === 'CapsLock') {
            setCaps(!caps);
        }
    };

    return { caps, onKeyDown };
};