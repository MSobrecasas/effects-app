import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { cargarUsuario, cargarUsuarioError, cargarUsuarioSuccess } from "../actions";
import { mergeMap, map, catchError, of } from "rxjs";
import { UsuarioService } from "src/app/services/usuario.service";

@Injectable()
export class UsuarioEffects {

    constructor(
        private actions$: Actions,
        private usuarioService: UsuarioService
    ) { }

    cargarUsuario$ = createEffect(
        () => this.actions$.pipe(
            ofType(cargarUsuario),
            mergeMap(
                (action) => this.usuarioService.getUserById(action.id)
                    .pipe(
                        map(usuario => cargarUsuarioSuccess({ usuario })),
                        catchError(err => of(cargarUsuarioError({ payload: err })))
                    )
            )
        )
    )

}