import _ from 'lodash'
import { combineReducers } from 'redux'

import * as types from './types'

const searchControlState = {
  q: '',
  status: 'success',
}

export const searchControl = (state = searchControlState, action) => {
  switch (action.type) {
    case types.SEARCH_START:
      return _.assign({}, state, {
        q: action.q,
        status: 'fetching',
      })
    case types.SEARCH_FINISH:
      return _.assign({}, state, {
        status: 'success',
      })
    case types.SEARCH_CLEAR:
      return searchControlState
    default:
      return state
  }
}

const searchGroupState = {
  error: '',
  q: '',
  status: 'success',
}

export const searchUsers = (state = searchGroupState, action) => {
  switch (action.type) {
    case types.SEARCH_USERS_REQUEST:
      return _.assign({}, state, { error: '', q: action.q, status: 'fetching' })
    case types.SEARCH_USERS_SUCCESS:
      return _.assign({}, state, { status: 'success' }, action.payload)
    case types.SEARCH_USERS_FAILURE:
      return _.assign({}, state, { error: action.message, status: 'failure' })
    case types.SEARCH_CLEAR:
      return _.assign({}, state, { error: '', q: '', status: 'success' })
    default:
      return state
  }
}

export const searchStories = (state = searchGroupState, action) => {
  switch (action.type) {
    case types.SEARCH_STORIES_REQUEST:
      return _.assign({}, state, { error: '', q: action.q, status: 'fetching' })
    case types.SEARCH_STORIES_SUCCESS:
      return _.assign({}, state, { status: 'success' }, action.payload)
    case types.SEARCH_STORIES_FAILURE:
      return _.assign({}, state, { error: action.message, status: 'failure' })
    case types.SEARCH_CLEAR:
      return _.assign({}, state, { error: '', q: '', status: 'success' })
    default:
      return state
  }
}

export const searchEntities = combineReducers({
  stories: searchStories,
  users: searchUsers,
})
