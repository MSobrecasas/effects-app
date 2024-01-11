import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { cargarUsuarios, cargarUsuariosError, cargarUsuariosSuccess } from "../actions";
import { mergeMap, map, catchError, of } from "rxjs";
import { UsuarioService } from "src/app/services/usuario.service";

@Injectable()
export class UsuariosEffects {

    constructor(
        private actions$: Actions,
        private usuarioService: UsuarioService
    ) { }

    cargarUsuarios$ = createEffect(
        () => this.actions$.pipe(
            ofType(cargarUsuarios),
            mergeMap(
                () => this.usuarioService.getUser()
                    .pipe(
                        map(usuarios => cargarUsuariosSuccess({ usuarios })),
                        catchError(err => of(cargarUsuariosError({ payload: err })))
                    )
            )
        )
    )

}