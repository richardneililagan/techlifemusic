// @flow strict
import React from 'react'
import Helmet from 'react-helmet'
import { withPrefix } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import type { Node as ReactNode } from 'react'
import { useSiteMetadata } from '../../hooks'
import styles from './Layout.module.scss'

import components from '../Widgets'

// :: ---

type Props = {
  children: ReactNode,
  title: string,
  description?: string,
  socialImage?: string
}

const Layout = ({ children, title, description, socialImage }: Props) => {
  const { author, url } = useSiteMetadata()
  const metaImage = socialImage != null ? socialImage : author.photo
  const metaImageUrl = url + withPrefix(metaImage)

  return (
    <div className={styles.layout}>
      <Helmet>
        <html lang='en' />
        <title>{title}</title>
        <link
          href='https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Roboto+Slab:wght@300;400;700&display=swap'
          rel='stylesheet'
        />
        <meta name='description' content={description} />
        <meta property='og:site_name' content={title} />
        <meta property='og:image' content={metaImageUrl} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content={metaImageUrl} />
        <meta name='twitter:site' content={`@${author.contacts.twitter}`} />
      </Helmet>
      <MDXProvider components={components}>{children}</MDXProvider>
    </div>
  )
}

export default Layout
