
import { takeEvery, all } from 'redux-saga/effects'
import { INCREMENT_REQ, DECREMENT_REQ, ADD_REQ } from '../actionTypes'
import { setIncrementAction, setDecrementAction, setAddAction } from './counter.action'


 function* watchIncrementAction(){
    yield takeEvery(INCREMENT_REQ, setIncrementAction)
}

 function* watchDecrementAction(){
    yield takeEvery(DECREMENT_REQ, setDecrementAction)
}

 function* watchAddAction(){
    yield takeEvery(ADD_REQ, setAddAction)
}

export default function* rootSaga(){
    yield all([
        watchIncrementAction(),
        watchDecrementAction(),
        watchAddAction()]
    )
}