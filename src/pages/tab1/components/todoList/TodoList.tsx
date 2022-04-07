import {observer} from 'mobx-react-lite';
import React from 'react';

import withLoading from '@src/hoc/withLoading';
import {Todo} from '@src/models/Todo';
import {useStore} from '@src/store/store';

const TodoListView = () => {
    const {
        todoStore: {todos},
    } = useStore();

    return (
        <ul>
            {todos.length > 0 &&
                todos.map((item: Todo, idx: number) => (
                    <li key={idx}>{item.title}</li>
                ))}
        </ul>
    );
};

const TodoList = withLoading(observer(TodoListView));

export default TodoList;
