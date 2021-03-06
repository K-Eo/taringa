import _ from 'lodash'

import * as types from './types'

export const channelEntities = (state = {}, action) => {
  if (action.entities && action.entities.channels) {
    return _.merge({}, state, action.entities.channels)
  }

  return state
}

const channelFetch = (state = { status: 'fetching', error: '' }, action) => {
  switch (action.type) {
    case types.FETCH_REQUEST:
      return _.assign({}, state, { status: 'fetching' })
    case types.FETCH_FAILURE:
      return _.assign({}, state, { status: 'failure', error: action.message })
    case types.FETCH_SUCCESS:
      return _.assign({}, state, { status: 'success' })
    default:
      return state
  }
}

export const channelsFetchControl = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_REQUEST:
    case types.FETCH_SUCCESS:
    case types.FETCH_FAILURE:
      return _.assign({}, state, {
        [action.name]: channelFetch(state[action.name], action),
      })
    default:
      return state
  }
}

const channelListFetchInitialState = {
  after: null,
  before: null,
  count: 0,
  error: '',
  items: [],
  status: 'success',
  totalCount: 0,
}

export const channelListFetch = (
  state = channelListFetchInitialState,
  action
) => {
  switch (action.type) {
    case types.FETCH_LIST_REQUEST:
      return _.assign({}, state, { error: '', status: 'fetching' })
    case types.FETCH_LIST_SUCCESS:
      return _.assign({}, state, {
        after: action.after,
        before: action.before,
        count: action.count,
        items: _.union(state.items, action.result),
        status: 'success',
        totalCount: action.totalCount,
      })
    case types.FETCH_LIST_FAILURE:
      return _.assign({}, state, { status: 'failure', error: action.message })
    case types.CLEAR_LIST:
      return channelListFetchInitialState
    default:
      return state
  }
}
