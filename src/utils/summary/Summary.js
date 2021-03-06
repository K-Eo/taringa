import _ from 'lodash'

class Summary {
  constructor() {
    this.omit = [
      'brandSafe',
      'classic',
      'edited',
      'keywords',
      'listViewSafe',
      'nsfw',
      'shared',
      'state',
      'summary',
      'tags',
    ]
  }

  getFirstSummaryImage() {
    const images = this.summary.summary.images
    return images && images.amount > 0 && images.slice.length > 0
      ? images.slice[0]
      : null
  }

  getFirstLinkImage() {
    const link = this.summary.summary.link
    return link ? link.images[0] : null
  }

  getExcerpt() {
    return this.summary.summary.excerpt
  }

  getIcon() {
    return 'fa fa-question'
  }

  getPreview() {
    return this.getFirstSummaryImage()
  }

  getThumbnail() {
    return this.getFirstSummaryImage()
  }

  getTitle() {
    return this.summary.title
  }

  exec(summary) {
    this.summary = summary
    const normalized = _.assign({}, this.summary, this.build())
    return _.omit(normalized, this.omit)
  }

  scaleThumbnail() {
    const image = this.getThumbnail()

    if (image) {
      const { height, url, width } = image

      return url.thumbnail(width, height)
    }

    return null
  }

  validateExcerpt() {
    if (this.getExcerpt() === this.getTitle()) {
      return ''
    }

    return this.getExcerpt()
  }

  build() {
    return {
      excerpt: this.validateExcerpt(),
      icon: this.getIcon(),
      preview: this.getPreview(),
      thumbnail: this.scaleThumbnail(),
      title: this.getTitle(),
      type: this.summary.tags[0],
    }
  }
}

export default Summary
