import { createContext, useContext } from 'react';
import CommonStore from '@src/store/commonStore';
import AuthStore from '@src/store/authStore';
import GameStore from "@src/store/gameStore";

interface Store {
    commonStore: CommonStore,
    authStore: AuthStore,
    gameStore: GameStore
}

export const store: Store = {
    commonStore: new CommonStore(),
    authStore: new AuthStore(),
    gameStore: new GameStore()
};

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}