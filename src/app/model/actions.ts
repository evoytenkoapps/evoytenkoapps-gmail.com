import {Action} from '@ngrx/store';

export const SEND_DATA = 'SEND_DATA';

export class SendData implements Action {
  readonly type = SEND_DATA;
  constructor(public payload: number) {}
}

export type Actions =  SendData;
