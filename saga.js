import { take, put } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';

import { connect } from './connect';

const action = (data) => ({ type: 'Socket', payload: data });

export default function* sharePriceSaga() {
  const chan = new eventChannel(emit => {
    
    const socket = connect();

    socket.on('infosys', function (data) {
      emit(data);
    });
    socket.on('l&t', function (data) {
      emit(data);
    });
    socket.on('mobiquity', function (data) {
      emit(data);
    });
    socket.on('capacite', function (data) {
      emit(data);
    });
    socket.on('tcs', function (data) {
      emit(data);
    });

    return () => {
      // TBD : unregister here 
    }
  });

  while (true) {
    const data = yield take(chan);
    yield put(action(data));
  }
}