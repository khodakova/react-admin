import HttpRequest from '@src/http/httpRequest';
import {Todo} from '@src/models/Todo';

const Todos = {
    getAllTodos: async (): Promise<Todo[]> => await HttpRequest.get('todos'),

    getTodoById: async (id: number): Promise<Todo> =>
        await HttpRequest.get(`todos/${id}`),
};

export default Todos;
