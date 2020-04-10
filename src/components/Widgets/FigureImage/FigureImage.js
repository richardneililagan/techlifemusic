import React from 'react'
import clsx from 'clsx'

// :: ---

const FigureImage = ({
  src,
  url,
  fluid,
  floatleft,
  floatright,
  title,
  alt,
  cite,
  children,
  className,
  style
}) => {
  const clazz = clsx(className, {
    fluid: fluid,
    'float-left': floatleft,
    'float-right': floatright
  })
  return (
    <figure className={clazz} style={style}>
      <img src={src} alt={alt} title={title} />
      <figcaption>
        {title || children}
        <cite>{cite}</cite>
      </figcaption>
    </figure>
  )
}

export default FigureImage
