import _ from 'lodash'
import axios from 'axios'
import { normalize } from 'normalizr'
import { call, put, select } from 'redux-saga/effects'

import * as actions from './actions'
import { summary } from './schemas'

const getFeed = (state, id) => state.feed[id]

const fetchFeed = (url, params = {}) => {
  return axios.get(url, params).then(response => response.data)
}

export function* loadFeed({ id, url }) {
  const feed = yield select(getFeed, id)

  if (feed && 'ids' in feed && feed.ids.length > 20) {
    return
  }

  try {
    yield put(actions.fetchRequest(id))

    const { after, before, totalCount, items } = yield call(fetchFeed, url)

    const action = _.assign(
      {},
      normalize(items, [summary]),
      actions.fetchSuccess(id),
      { after, before, totalCount }
    )

    yield put(action)
  } catch (e) {
    yield put(actions.fetchFailure(id, e.message))
  }
}

export function* loadFeedTail({ id, url, after: afterCursor }) {
  const feed = yield select(getFeed, id)

  if (feed.status === 'fetching') {
    return
  }

  try {
    yield put(actions.fetchTailRequest(id))

    const { after, before, items, totalCount } = yield call(fetchFeed, url, {
      params: { after: afterCursor },
    })

    const action = _.assign(
      {},
      normalize(items, [summary]),
      actions.fetchTailSuccess(id),
      { after, before, totalCount }
    )

    yield put(action)
  } catch (e) {
    yield put(actions.fetchTailFailure(id, e.message))
  }
}

const getId = pathname => {
  switch (pathname) {
    case '/tops':
      return 'tops'
    case '/recents':
      return 'recents'
    default:
      return 'trending'
  }
}

const getFeeds = state => state.feed

export function* clearFeedTail({ pathname }) {
  const id = yield call(getId, pathname)
  const feed = yield select(getFeed, id)
  if (feed.ids.length <= 20) {
    return
  }

  const feeds = yield select(getFeeds)

  const totalIds = _.reduce(
    feeds,
    (result, value, key) => {
      if (key === id) {
        return result
      }
      return _.union(result, value.ids)
    },
    []
  )

  const ids = yield call(_.take, feed.ids, 20)
  yield put(actions.clearTailIds(id, ids))
  const idsToRemoveFromFeed = yield call(_.difference, feed.ids, ids)
  const totalIdsToRemove = _.difference(idsToRemoveFromFeed, totalIds)
  yield put(actions.remove(totalIdsToRemove))
}
