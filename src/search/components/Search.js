import React, { Component } from 'react'

import Ad from '../../ads/components/Ad'
import TabButton from './TabButtonContainer'
import StoriesTab from './StoriesTab'
import UsersTab from './UsersTab'
import ChannelsTab from './ChannelsTab'

const tabs = {
  channels: ChannelsTab,
  stories: StoriesTab,
  users: UsersTab,
}

class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeTab: 'stories',
    }

    this.handleTabClick = this.handleTabClick.bind(this)
  }

  handleTabClick(e) {
    this.setState({ activeTab: e })
  }

  render() {
    const { activeTab } = this.state

    const CurrentTab = tabs[activeTab]

    return (
      <div className="row">
        <div className="col-12 col-lg-8">
          <div className="card mb-4">
            <div className="card-header">
              <div className="nav nav-tabs card-header-tabs" role="tablist">
                <TabButton
                  id="stories"
                  isActive={activeTab === 'stories'}
                  label="Posts"
                  onClick={this.handleTabClick}
                />

                <TabButton
                  id="users"
                  isActive={activeTab === 'users'}
                  label="Usuarios"
                  onClick={this.handleTabClick}
                />

                <TabButton
                  id="channels"
                  isActive={activeTab === 'channels'}
                  label="Canales"
                  onClick={this.handleTabClick}
                />
              </div>
            </div>

            {CurrentTab && <CurrentTab />}
          </div>
        </div>

        <div className="col-4 d-none d-lg-block">
          <Ad />
        </div>
      </div>
    )
  }
}

export default Search
