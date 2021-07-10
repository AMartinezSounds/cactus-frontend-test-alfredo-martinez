import React from 'react'
import AboutPhone from './AboutPhone'
import AboutTablet from './AboutTablet'
import AboutDesktop from './AboutDesktop'

function About () {
  const data = {
    sectionTitle: 'Introduction',
    description: 'Speciliazing in Urban Design allowed me to focus on creating exceptional structures that live in harmony with their surroundings. I consider every detail from every surrounding element to inform my designs.'
  }
  return (
    <div>
      <AboutPhone sectionTitle={data.sectionTitle} description={data.description} />
      <AboutTablet sectionTitle={data.sectionTitle} description={data.description} />
      <AboutDesktop sectionTitle={data.sectionTitle} description={data.description} />
    </div>
  )
}

export default About
