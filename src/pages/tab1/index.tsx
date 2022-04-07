import {observer} from 'mobx-react-lite';
import React, {useEffect} from 'react';

import TodoList from '@src/pages/tab1/components/todoList/TodoList';
import {useStore} from '@src/store/store';

const Tab1 = () => {
    const {
        todoStore: {isLoading, getTodos},
    } = useStore();

    useEffect(() => {
        getTodos();
    }, []);

    return <TodoList loading={isLoading} />;
};

export default observer(Tab1);
