import React from 'react'
import IntroductionDesktop from './IntroductionDesktop'
import IntroductionPhone from './IntroductionPhone'
import IntroductionTablet from './IntroductionTablet'

function Introduction () {
  const data = {
    sectionTitle: 'I call architecture the frozen music',
    description1: 'Over the past 10 years, I have worked on all kinds of projects. From stations to high-rise buildings, I create spaces that inspire and delight.',
    description2: 'We work closely with our clients so that we understand the intricacies of each project. This allows us to work in harmony the surrounding area to create truly stunning projects that will stand the test of time.'
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
