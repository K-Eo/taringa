import React from 'react'

import './Attachment.css'

const ImageAttachment = ({ url }) => {
  if (url) {
    return <img className="img-fluid" src={url} alt={url} />
  }

  return null
}

const LinkAttachment = ({ videoId }) => {
  if (!videoId) {
    return null
  }

  const src = `https://www.youtube.com/embed/${videoId}`

  return (
    <div className="Attachment-iframe-wrapper">
      <iframe
        allow="autoplay; encrypted-media"
        className="Attachment-iframe"
        allowFullScreen
        frameBorder="0"
        height="720"
        src={src}
        title={src}
        width="1280"
      />
    </div>
  )
}

const Attachment = ({ type, ...rest }) => {
  switch (type) {
    case 'image':
      return <ImageAttachment {...rest} />
    case 'link':
      return <LinkAttachment {...rest} />
    default:
      return <div>Attachment no supported</div>
  }
}

export { ImageAttachment, LinkAttachment }

export default Attachment
