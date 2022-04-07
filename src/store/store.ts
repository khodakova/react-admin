import {createContext, useContext} from 'react';

import AuthStore from '@src/store/authStore';
import CommonStore from '@src/store/commonStore';
import GameStore from '@src/store/gameStore';
import TodoStore from '@src/store/todoStore';

interface Store {
    commonStore: CommonStore;
    authStore: AuthStore;
    gameStore: GameStore;
    todoStore: TodoStore;
}

export const store: Store = {
    commonStore: new CommonStore(),
    authStore: new AuthStore(),
    gameStore: new GameStore(),
    todoStore: new TodoStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}
