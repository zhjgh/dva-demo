import pathToRegexp from 'path-to-regexp'
import { postDataService, getDataService } from '@/services/commonService'
import { api } from '@/utils/config'

export default {
  namespace: 'products',
  state: {
    list: [],
  },
  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen((location) => {
        const match = pathToRegexp('/').exec(location.pathname)
        if (match) {
          dispatch({ type: 'query' })
        }
      })
    },
  },
  effects: {
    *query({ payload }, { call, put }){
      const data = yield call(getDataService, { url:api.queryProductList }, {})
      console.log(data.subjects)
      yield put({
        type: 'update',
        payload: data.subjects,
      })
    },
    *delete({ payload: id }, { select, put }){
      const list = yield select(state => state.products.list);
      const data = list.filter(item => item.id !== id);
      console.log(data)
      yield put({
        type: 'update',
        payload: data,
      })
    }
  },
  reducers: {
    update(state, { payload }) {
      return {
        ...state,
        list: payload
      }
    },
  },
};