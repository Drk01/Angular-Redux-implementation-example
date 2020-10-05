import { AppState } from './app.reducers';
import {
  IncrementarAction,
  DecrementarAction,
} from './contador/contador.actions';
import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'redux-app';

  contador: number;

  constructor(private store: Store<AppStatete>) {
    // this.contador = 10;
    this.store.select('contador').subscribe((state) => {
      this.contador = state;
    });
  }

  incrementar() {
    // this.contador++;
    const action = new IncrementarAction();

    this.store.dispatch(action);
  }

  decrementar() {
    // this.contador--;
    const action = new DecrementarAction();

    this.store.dispatch(action);
  }
}
