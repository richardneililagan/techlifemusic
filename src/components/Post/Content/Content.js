// @flow strict
import React from 'react'
import moment from 'moment'
import styles from './Content.module.scss'

type Props = {
  body: string,
  title: string,
  subtitle: String,
  date: string
}

const Heading = ({ title, subtitle }: Pick<Props, 'title' | 'subtitle'>) => (
  <header>
    <h1 className={styles['content__title']}>{title}</h1>
    {!!subtitle && <h2 className={styles['content__subtitle']}>{subtitle}</h2>}
  </header>
)

const Content = ({ body, title, subtitle, date }: Props) => (
  <article className={styles['content']}>
    <Heading title={title} subtitle={subtitle} />
    <div
      className={styles['content__body']}
      dangerouslySetInnerHTML={{ __html: body }}
    />
  </article>
)

export default Content
