import React from 'react'
import IntroductionDesktop from './IntroductionDesktop'
import IntroductionPhone from './IntroductionPhone'
import IntroductionTablet from './IntroductionTablet'

function Introduction () {
  const data = {
    sectionTitle: 'I call architecture the frozen music'
  }
  return (
    <section>
      <IntroductionPhone sectionTitle={data.sectionTitle} />
      <IntroductionTablet sectionTitle={data.sectionTitle} />
      <IntroductionDesktop sectionTitle={data.sectionTitle} />
    </section>
  )
}

export default Introduction
