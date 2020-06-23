import { put} from 'redux-saga/effects'
import { INCREMENT, DECREMENT, ADD} from '../actionTypes'


export function* setIncrementAction() {
    yield put({ type: INCREMENT })
}

export function* setDecrementAction() {
    yield put({ type: DECREMENT })
}

export function* setAddAction({payload}) {
    yield put({ type: ADD, payload })
}
