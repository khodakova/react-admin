import React, { useState } from 'react';

export const useCapsLock = () => {
    const [caps, setCaps] = useState(false);

    const onKeyDown = (keyEvent: React.KeyboardEvent) => {
        if (keyEvent.getModifierState('CapsLock')) {
            setCaps(true);
        } else {
            setCaps(false);
        }
    };

    return { caps, onKeyDown };
};