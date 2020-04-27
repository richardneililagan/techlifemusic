import React from 'react'

// :: ---

const TOC = ({ links, ...props }) => {
  const linkComponents = links.map(link => {
    const [text, url] = link
    return (
      <li key={url}>
        <a href={url}>{text}</a>
      </li>
    )
  })

  return (
    <ul className='toc' {...props} aria-label='Contents'>
      {linkComponents}
    </ul>
  )
}

export default TOC
