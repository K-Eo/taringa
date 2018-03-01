import _ from 'lodash'
import React, { Component } from 'react'

import Summary from './Summary'

class Summaries extends Component {
  componentDidMount() {
    this.props.onLoad()
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.props.onLoad()
    }
  }

  render() {
    const { items, onRetry, placeholderCount, size, status } = this.props

    const isFetching = status === 'fetching'
    const hasFailure = status === 'failure'
    const itemsLength = items.length

    const makePlaceholders = () => {
      const effectiveCount = itemsLength > 0 ? 1 : placeholderCount
      return _.times(effectiveCount, index => (
        <Summary key={index} isPlaceholder size={size} />
      ))
    }

    return (
      <div className="Summaries">
        {(!hasFailure || itemsLength > 0) && (
          <div className="card">
            <ul className="list-group list-group-flush">
              {items.map(item => (
                <Summary {...item} key={item.id} size={size} />
              ))}

              {isFetching && makePlaceholders()}
            </ul>
          </div>
        )}

        {hasFailure && (
          <div className="my-4 text-center">
            <div className="my-3 text-danger">
              ¡Ratas! Parece que no estás conectado a internet. Refresca la
              página o pulsa el siguiente botón.
            </div>

            <button
              className="btn btn-outline-primary btn-sm"
              onClick={onRetry}
            >
              Volver a intentar
            </button>
          </div>
        )}
      </div>
    )
  }
}

Summaries.defaultProps = {
  items: [],
  onLoad: () => {},
  onRetry: () => {},
  placeholderCount: 8,
  status: 'success',
}

export default Summaries
