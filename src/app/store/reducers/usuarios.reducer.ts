import { createReducer, on } from '@ngrx/store';
import * as usuario from '../actions';
import { Usuario } from 'src/app/models/usuario.model';

export interface UsuarioState {
    users: Usuario[],
    loaded: boolean,
    loading: boolean,
    error: any
};

const usuariosInitialState: UsuarioState = {
    users: [],
    loaded: false,
    loading: false,
    error: null
};

export const UsuariosReducer = createReducer(
    usuariosInitialState,
    on(
        usuario.cargarUsuarios,
        (state) => ({ ...state, loading: true }),
    ),
    on(
        usuario.cargarUsuariosSuccess,
        (state, { usuarios }) => ({
            ...state, loading: false,
            loaded: true,
            users: [...usuarios]
        }),
    ),
    on(
        usuario.cargarUsuariosError,
        (state, { payload }) => ({
            ...state, loading: false,
            loaded: false,
            error: {
                url: payload.url,
                name: payload.name,
                message: payload.message
            }
        }),
    ),
);