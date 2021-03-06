import React from 'react'

import Ad from '../../ads/components/Ad'
import Feed from '../../feed/components/Feed'
import Filterable from '../../filters/components/Filterable'

import { filters } from '../constants'

const Global = ({ match }) => {
  const filter = match.params.filter || 'hot'
  const url = filters[filter].url

  return (
    <div className="row">
      <Filterable filters={filters} />

      <div className="col-12 col-lg-8">
        <Feed feedId="global" filter={filter} url={url} />
      </div>

      <div className="col-4 order-first order-lg-last d-none d-lg-block">
        <Ad />
      </div>
    </div>
  )
}

Global.defaultProps = {
  match: { params: {} },
}

export default Global
