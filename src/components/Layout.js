import React from 'react'
import Helmet from 'react-helmet'

import Header from './Header'
import Footer from './Footer';
import IntroOverlay from './IntroOverlay';
import '../styles/main.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Gatsby + Netlify CMS" />
    <Header />
    <IntroOverlay />
    {children}
    <Footer />
  </div>
)

export default TemplateWrapper
