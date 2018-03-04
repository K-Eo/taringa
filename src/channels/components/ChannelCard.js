import React from 'react'

import CardDecorator from '../../common/CardDecorator'

const ChannelCard = ({ channel, control, link }) => {
  return (
    <CardDecorator
      avatar={channel.thumbnail}
      cover={channel.background}
      link={link}
      placeholder={control.status === 'fetching'}
      to={`/c/${channel.name}`}
    >
      <div className="card-body">
        <h5 className="card-title">{channel.title}</h5>

        {channel.description !== channel.title && (
          <p className="card-text mt-3 mb-4">{channel.description}</p>
        )}

        <button className="btn btn-primary btn-block font-weight-bold mb-3">
          SEGUIR
        </button>

        <p className="text-muted small mb-0">
          Siguiendo este canal podrás ver sus publicaciones en tu página de
          inicio
        </p>
      </div>
    </CardDecorator>
  )
}

ChannelCard.defaultProps = {
  channel: {},
  control: { status: 'fetching' },
  link: true,
}

export default ChannelCard
