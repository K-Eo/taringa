import _ from 'lodash'

const reply1 = {
  attachment: null,
  body: 'I am a reply comment',
  created: 1513920502005,
  downvotes: 0,
  id: '53675147',
  owner: {
    avatar:
      'https://a18.t26.net/avatares/2/3/4/5/120x120_nr_23454008.jpg?888730',
    firstname: 'Foo',
    id: 'l2m1j',
    lastname: 'Bar',
    type: 'user:summary',
    username: 'Foobar',
  },
  state: {},
  type: 'comment',
  upvotes: 0,
}

const reply2 = {
  attachment: null,
  body: 'I am a reply comment',
  created: 1513920502005,
  downvotes: 0,
  id: '53675146',
  owner: {
    avatar:
      'https://a18.t26.net/avatares/2/3/4/5/120x120_nr_23454008.jpg?888730',
    firstname: 'Foo',
    id: 'l2m1j',
    lastname: 'Bar',
    type: 'user:summary',
    username: 'Foobar',
  },
  state: {},
  type: 'comment',
  upvotes: 0,
}

export const comment = {
  attachment: null,
  body: 'I am a text comment',
  created: 1513920502005,
  downvotes: 0,
  id: '53675146',
  owner: {
    avatar:
      'https://a18.t26.net/avatares/2/3/4/5/120x120_nr_23454008.jpg?888730',
    firstname: 'Foo',
    id: 'l2m1j',
    lastname: 'Bar',
    type: 'user:summary',
    username: 'Foobar',
  },
  replies: {
    after: '',
    before: '',
    count: 0,
    items: [],
    totalCount: 0,
  },
  state: {},
  type: 'comment',
  upvotes: 0,
}

export const comments = [
  _.assign({}, comment, { id: 1 }),
  _.assign({}, comment, { id: 2 }),
]

export const commentWithReply = {
  attachment: null,
  body: 'I am a text comment',
  created: 1513920502005,
  downvotes: 0,
  id: '87782388.53675146',
  owner: {
    avatar:
      'https://a18.t26.net/avatares/2/3/4/5/120x120_nr_23454008.jpg?888730',
    firstname: 'Foo',
    id: 'l2m1j',
    lastname: 'Bar',
    type: 'user:summary',
    username: 'Foobar',
  },
  replies: {
    after: '',
    before: '',
    count: 2,
    items: [reply1],
    totalCount: 2,
  },
  state: {},
  type: 'comment',
  upvotes: 0,
}

export const commentWithReplies = {
  attachment: null,
  body: 'I am a text comment',
  created: 1513920502005,
  downvotes: 0,
  id: '87782388.53675146',
  owner: {
    avatar:
      'https://a18.t26.net/avatares/2/3/4/5/120x120_nr_23454008.jpg?888730',
    firstname: 'Foo',
    id: 'l2m1j',
    lastname: 'Bar',
    type: 'user:summary',
    username: 'Foobar',
  },
  replies: {
    after: '',
    before: '',
    count: 2,
    items: [reply1, reply2],
    totalCount: 2,
  },
  state: {},
  type: 'comment',
  upvotes: 0,
}
