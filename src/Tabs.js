import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TabContent from './TabContent'
import TabNav from './TabNav'

class Tabs extends Component {
  static propTypes = {
    className: PropTypes.string,
    classPrefix: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),

    defaultActiveIndex: PropTypes.number,
    activeIndex: PropTypes.number,
    onChange: PropTypes.func
  }

  static defaultProps = {
    classPrefix: 'tabs',
    onChange: () => {}
  }

  constructor(props) {
    super(props)

    const currProps = this.props

    let activeIndex

    this.handleTabClick = this.handleTabClick.bind(this)

    if ('activeIndex' in currProps) {
      activeIndex = currProps
    } else if ('defaultActiveIndex' in currProps) {
      activeIndex = currProps.defaultActiveIndex
    }

    this.state = {
      activeIndex,
      prevIndex: activeIndex
    }
  }

  handleTabClick(activeIndex) {
    const prevIndex = this.state.activeIndex

    if (this.state.activeIndex !== activeIndex && 'defaultActiveIndex' in this.props) {
      this.setState({
        activeIndex,
        prevIndex
      })
    }

    this.props.onChange({ activeIndex, prevIndex})
  }

  renderTabNav() {
    const { classPrefix, children } = this.props
    console.log(children);

    return (
      <TabNav
        key="tabBar"
        classPrefix={classPrefix}
        onTabClick={this.handleTabClick}
        panels={children}
        activeIndex={this.state.activeIndex}
        >
      </TabNav>
    )
  }

  renderTabContent() {
    const { classPrefix, children } = this.props

    return (
      <TabContent
        key="tabcontent"
        classPrefix={classPrefix}
        panels={children}
        activeIndex={this.state.activeIndex}
       >
      </TabContent>
    )
  }

  render() {
    const { className } = this.props

    const classes = classnames(className, 'ui-tabs')

    return (
      <div className={classes}>
        {this.renderTabNav()}
        {this.renderTabContent()}
      </div>
    )
  }
}

export default Tabs
