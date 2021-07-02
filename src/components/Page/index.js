import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Script from 'next/script'

import CookieBanner from '@/components/CookieBanner'

const Page = ({ title, description, canonicalUrl, children }) => {
  return (
    <>
      <div className="Page">
        <Head>
          <title>{title ? `${title} | Dersu` : `Dersu | ${description}`}</title>
          <meta name="description" content={description} />
          {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          {/* <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" /> */}
          <meta name="theme-color" content="#ffffff" />
        </Head>
        {children}
        <CookieBanner />
      </div>
      <Script
        async
        defer
        data-domain="dersu.uz"
        src="https://plausible.io/js/plausible.js"
      />
    </>
  )
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  canonicalUrl: PropTypes.string,
  description: PropTypes.string.isRequired,
}

export default Page
