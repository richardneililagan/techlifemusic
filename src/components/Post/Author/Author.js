// @flow strict
import React from 'react'
import { getContactHref } from '../../../utils'
import styles from './Author.module.scss'
import { useSiteMetadata } from '../../../hooks'

const Author = () => {
  const { author } = useSiteMetadata()

  return (
    <cite className={styles['author']}>
      <header>{author.name}</header>
      <p className={styles['author__bio']}>
        {author.bio}
        <div>
          <a
            className={styles['author__bio-twitter']}
            href={getContactHref('twitter', author.contacts.twitter)}
            rel='noopener noreferrer'
            target='_blank'
          >
            Twitter
          </a>
          &nbsp;&middot;&nbsp;
          <a
            className={styles['author__bio-github']}
            href={getContactHref('twitter', author.contacts.github)}
            rel='noopener noreferrer'
            target='_blank'
          >
            Github
          </a>
          &nbsp;&middot;&nbsp;
          <a
            className={styles['author__bio-linkedin']}
            href={getContactHref('twitter', author.contacts.linkedin)}
            rel='noopener noreferrer'
            target='_blank'
          >
            LinkedIn
          </a>
        </div>
      </p>
    </cite>
  )
}

export default Author
