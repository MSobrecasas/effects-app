import { ActionReducerMap, createReducer } from '@ngrx/store';
import * as reducers from './reducers';
import { Usuario } from '../models/usuario.model';

export interface AppState {
    usuarios: reducers.UsuarioState
};

export const appReducers: ActionReducerMap<AppState> = {
    usuarios: reducers.UsuariosReducer,
};