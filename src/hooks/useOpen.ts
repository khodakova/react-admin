import { useCallback, useEffect, useState } from 'react';

export const useOpen = () => {
    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = (bool: boolean) => {
        setOpen(bool);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const escFunction = useCallback((event: any) => {
        if (event.keyCode === 27) {
            setOpen(false);
        }
    }, []);

    useEffect(() => {
        console.log('addeventlistener')
        document.addEventListener('keydown', escFunction, false);
        return () => {
            document.removeEventListener('keydown', escFunction, false);
        };
    }, [escFunction]);

    return { open, handleOpen, handleClose };
};