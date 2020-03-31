export interface MyData<T> {
  data: T;
  status: MyStatus;
}

export enum MyStatus {
  PENDING = 1,
  LOADING,
  LOADED,
  FAILED,
  CANCEL,
  SENDING,
  SENDED
}

export interface MyDataState {
 [id: number]: {status: MyStatus};
}

export interface AppStore {
  data: MyDataState;
}
