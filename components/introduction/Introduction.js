import React from 'react'
import IntroductionDesktop from './IntroductionDesktop'
import IntroductionPhone from './IntroductionPhone'
import IntroductionTablet from './IntroductionTablet'

function Introduction () {
  return (
    <div>
      <IntroductionPhone />
      <IntroductionTablet />
      <IntroductionDesktop />	
    </div>
  )
}

export default Introduction
