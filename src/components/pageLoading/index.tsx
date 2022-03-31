import React from 'react';
import Spinner from '../spinner'

interface IProps {
    show?: boolean;
}

const PageLoading: React.FC<IProps> = ({ show }) => {
    const loading = false;
    // const { loading } = useSelector(selectLoading);
    // const showLoading = typeof show === 'boolean' ? show : loading;
    const showLoading = typeof show === 'boolean' ? show : loading;

    return (
        <div
            className='page-loading'
            style={ { display: showLoading ? '' : 'none' } }
        >
            <div className='loading-content'>
                <Spinner/>
            </div>
        </div>
    );
};

export default PageLoading;
