import { MultiplicarAction, DividirAction } from './../contador.actions';
import { AppState } from './../../app.reducers';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: [],
})
export class HijoComponent implements OnInit {
  contador: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('contador').subscribe((contador) => {
      this.contador = contador;
    });
  }

  multiplicar() {
    const action = new MultiplicarAction(5);

    this.store.dispatch(action);
    // this.contador *= 2;
    // this.cambioContador.emit(this.contador);
  }

  dividir() {
    const action = new DividirAction(5);

    this.store.dispatch(action);
    // this.contador /= 2;
    //this.cambioContador.emit(this.contador);
  }

  resetNieto(nuevoContador) {
    this.contador = nuevoContador;
    //this.cambioContador.emit(this.contador);
  }
}
