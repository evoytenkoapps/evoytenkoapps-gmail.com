import {MyDataState, MyStatus} from './store';
import {SendData} from './actions';


export function mainReducer(
  state: MyDataState,
  action: SendData
): MyDataState {
  state[action.payload].status = MyStatus.SENDING;
  return  state;
}
