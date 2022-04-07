import {makeAutoObservable} from 'mobx';

import api from '@src/api';
import ServerError from '@src/models/ServerError';
import {Todo} from '@src/models/Todo';

class TodoStore {
    isLoading = false;
    error: ServerError | null = null;
    todos: Todo[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    setIsLoading = (val: boolean) => {
        this.isLoading = val;
    };

    setError = (error: ServerError | null) => {
        this.error = error;
    };

    setTodos = (todos: Todo[]) => {
        this.todos = todos;
    };

    getTodos = async () => {
        this.setIsLoading(true);
        this.setError(null);
        try {
            const res: Todo[] = await api.Todos.getAllTodos();
            this.setTodos(res);
        } catch (e) {
            console.log(e);
        } finally {
            this.setIsLoading(false);
        }
    };
}

export default TodoStore;
