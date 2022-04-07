import React from 'react';

import Spinner from '@components/spinner';

interface WithLoadingProps {
    loading: boolean;
}

const withLoading = <T extends object>(
    WrappedComponent: React.ComponentType<T>,
) => {
    const HOC = (props: T & WithLoadingProps) => {
        const {loading, ...otherProps} = props;
        if (loading) {
            return <Spinner />;
        } else {
            return <WrappedComponent {...(otherProps as T)} />;
        }
    };

    return HOC;
};

export default withLoading;
