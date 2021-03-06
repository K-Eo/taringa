import _ from 'lodash'
import { createSelector } from 'reselect'

import { normalizeStory } from '../summaries/utils'

const storiesState = state => state.search.stories
const usersState = state => state.search.users
const channelsState = state => state.search.channels

export const storiesSelector = createSelector(storiesState, stories => {
  if (stories.items) {
  }

  return _.assign({}, stories, {
    items: _.map(stories.items, i => normalizeStory(i)),
  })
})

export const usersSelector = createSelector(usersState, users => users)

export const channelsSelector = createSelector(
  channelsState,
  channels => channels
)
