/* eslint-disable @typescript-eslint/no-explicit-any */
import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { useDispatch } from 'react-redux';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
    };

    return configureStore<StateSchema>({
        reducer: rootReducers,
        // devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
export const useAppDispatch = () => useDispatch<any>();
