import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { decremente, incremente } from '../action/contador.action';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {

  contador$: Observable<number> | undefined;

    constructor(private store: Store<{ contador: number }>) {
    this.contador$ = store.select('contador');
  }

  ngOnInit(): void {
  }

  incrementa(): void{
    this.store.dispatch(incremente());
  }

  decrementa(): void{
    this.store.dispatch(decremente());
  }

}
