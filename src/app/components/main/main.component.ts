import {Component, OnInit} from '@angular/core';
import {AppStore} from '../../model/store';
import {SendData} from '../../model/actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private store: Store<AppStore>) {
  }

  ngOnInit() {
  }

  public onSend() {
    this.store.dispatch(new SendData(13123))
  }
}
