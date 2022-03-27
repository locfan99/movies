import {applyMiddleware, combineReducers, createStore} from 'redux'
import createMiddleWareSaga from 'redux-saga'
import LayThongTinHeThongRapReducer from './reducers/LayThongTinHeThongRapReducer';
import QuanLyNguoiDungReducer from './reducers/QuanLyNguoiDungReducer';
import QuanLyPhimReducer from './reducers/QuanLyPhimReducer';
import { rootSaga } from './sagas/rootSaga';
import thunk from 'redux-thunk'
const middleWareSaga = createMiddleWareSaga();

const rootReducer = combineReducers({
    QuanLyPhimReducer,
    LayThongTinHeThongRapReducer,
    QuanLyNguoiDungReducer
});


const store  = createStore(rootReducer,applyMiddleware(thunk,middleWareSaga))
middleWareSaga.run(rootSaga);

export default store