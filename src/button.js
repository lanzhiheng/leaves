import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group'
import { getChildMapping } from 'react-transition-group/utils/ChildMapping'

export default function Button({children}) {

  return (
    <CSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
      <button className="btn">{children}</button>
    </CSSTransitionGroup>
  )
}
