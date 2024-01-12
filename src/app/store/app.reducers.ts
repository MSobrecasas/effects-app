import { ActionReducerMap, createReducer } from '@ngrx/store';
import * as reducers from './reducers';

export interface AppState {
    usuarios: reducers.UsuariosState,
    usuario: reducers.UsuarioState

};

export const appReducers: ActionReducerMap<AppState> = {
    usuarios: reducers.UsuariosReducer,
    usuario: reducers.UsuarioReducer,
};