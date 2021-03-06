import React from 'react'

import Feed from '../../feed/components/Feed'
import Filterable from '../../filters/components/Filterable'
import UserCard from './UserCardContainer'

const User = ({ match }) => {
  const username = match.params.username

  const filters = {
    hot: {
      displayName: 'Destacados',
      exact: true,
      id: 'hot',
      pathname: `/u/${username}`,
      url: `/user/${username}/feed`,
    },
    recents: {
      displayName: 'Recientes',
      exact: false,
      id: 'recents',
      pathname: `/u/${username}/recents`,
      url: `/user/${username}/feed`,
    },
    tops: {
      displayName: 'Tops',
      exact: false,
      id: 'tops',
      pathname: `/u/${username}/tops`,
      url: `/user/${username}/tops/week`,
    },
  }

  const filter = match.params.filter || 'hot'
  const url = filters[filter].url

  return (
    <div className="row">
      <Filterable filters={filters} />

      <div className="col-12 col-lg-8">
        <Feed feedId={username} filter={filter} url={url} />
      </div>

      <div className="col-12 col-lg-4 order-first order-lg-last mb-4 mb-lg-0">
        <UserCard username={username} />
      </div>
    </div>
  )
}

export default User
