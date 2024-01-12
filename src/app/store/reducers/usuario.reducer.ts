import { createReducer, on } from '@ngrx/store';
import * as usuario from '../actions';
import { Usuario } from 'src/app/models/usuario.model';

export interface UsuarioState {
    id: string,
    user: Usuario | null,
    loaded: boolean,
    loading: boolean,
    error: any
};

const usuariosInitialState: UsuarioState = {
    id: '',
    user: null,
    loaded: false,
    loading: false,
    error: null
};

export const UsuarioReducer = createReducer(
    usuariosInitialState,
    on(
        usuario.cargarUsuario,
        (state, { id }) => ({
            ...state,
            loading: true,
            id: id
        }),
    ),
    on(
        usuario.cargarUsuarioSuccess,
        (state, { usuario }) => ({
            ...state,
            loading: false,
            loaded: true,
            user: { ...usuario }
        }),
    ),
    on(
        usuario.cargarUsuarioError,
        (state, { payload }) => ({
            ...state,
            loading: false,
            loaded: false,
            user: null,
            error: {
                url: payload.url,
                name: payload.name,
                message: payload.message
            }
        }),
    ),
);