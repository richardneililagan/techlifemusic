// @flow strict
import React from 'react'
import styles from './Copyright.module.scss'

type Props = {
  copyright: string
}

const Copyright = ({ copyright }: Props) => (
  <>
    <div className={styles['copyright']}>{copyright}</div>
    <cite className={styles['attribution']}>
      Site theme was adapted from&nbsp;
      <a
        href='https://github.com/alxshelepenok/gatsby-starter-lumen'
        rel='noopener noreferrer'
      >
        Lumen
      </a>{' '}
      by&nbsp;
      <a href='https://github.com/alxshelepenok' rel='noopener noreferrer'>
        Alexander Shelepenok
      </a>
      . Powered by&nbsp;
      <a href='https://gatsbyjs.org' rel='noopener noreferrer'>
        Gatsby
      </a>
      &nbsp;on&nbsp;
      <a
        href='https://aws.amazon.com/amplify/console'
        rel='noopener noreferrer'
      >
        AWS Amplify
      </a>
      .
    </cite>
  </>
)

export default Copyright
