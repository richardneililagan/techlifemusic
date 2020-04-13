// @flow strict
import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
// import moment from 'moment'
import styles from './Content.module.scss'

type HeadingProps = {
  title: string,
  subtitle?: string
}

type ContentProps = {
  body: string,
  title: string,
  subtitle?: string
}

const Heading = ({ title, subtitle }: HeadingProps) => (
  <header>
    <h1 className={styles.content__title}>{title}</h1>
    {subtitle !== null && subtitle !== undefined && (
      <p className={styles.content__subtitle}>{subtitle}</p>
    )}
  </header>
)

const Content = ({ body, title, subtitle }: ContentProps) => (
  <article className={styles.content}>
    <Heading title={title} subtitle={subtitle} />
    <div className={styles.content__body}>
      <MDXRenderer>{body}</MDXRenderer>
    </div>
  </article>
)

export default Content
