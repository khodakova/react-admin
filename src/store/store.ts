import { createContext, useContext } from 'react';
import CommonStore from '@src/store/commonStore';
import AuthStore from '@src/store/authStore';

interface Store {
    commonStore: CommonStore,
    authStore: AuthStore
}

export const store: Store = {
    commonStore: new CommonStore(),
    authStore: new AuthStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}