import Summary from './Summary'

class Article extends Summary {
  getIcon() {
    return 'far fa-file-alt'
  }

  getPreview() {
    return this.getFirstLinkImage() || this.getFirstSummaryImage()
  }

  getTitle() {
    return super.getTitle()
  }

  getArticleThumbnail() {
    return this.summary.summary.link &&
      this.summary.summary.link.images.length > 0
      ? this.summary.summary.link.images[0]
      : null
  }

  getThumbnail() {
    return super.getThumbnail() || this.getArticleThumbnail()
  }
}

export default Article
