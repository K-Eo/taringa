import _ from 'lodash'
import { connect } from 'react-redux'
import { compose } from 'recompose'

import infiniteScroll from '../../HOC/InfiniteScroll'
import withError from '../../HOC/withError'
import withLoader from '../../HOC/withLoader'
import Summaries from '../../summaries/components/Summaries'
import { load, clear } from '../../summaries/actions'

const mapStateToProps = (state, ownProps) => {
  return _.assign(
    { items: [], status: 'fetching', totalCount: 0, count: 0 },
    state.feed[ownProps.feedId],
    { size: state.settings.itemSize }
  )
}

const mapDispatchToProps = (dispatch, { feedId, url }) => {
  return {
    onLoad: () => {
      dispatch(clear(feedId))
      dispatch(load(feedId, url))
    },
    onLoadMore: () => dispatch(load(feedId, url)),
    onRetry: () => dispatch(load(feedId, url)),
  }
}

const getStatus = props => props.status
const getHasMoreContent = ({ items, count }) => count !== 0
const getWillReload = (props, prevProps) => props.filter !== prevProps.filter
const getShowLoader = ({ status, ...rest }) =>
  status === 'fetching' || (status === 'success' && getHasMoreContent(rest))

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  infiniteScroll(getStatus, getHasMoreContent, getWillReload),
  withLoader(getShowLoader, 'my-4', 'fa-2x'),
  withError()
)(Summaries)
