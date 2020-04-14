import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-gtag'

// :: ---

const ExternalLink = ({ children, ...props }) => {
  if (
    process.env.NODE_ENV === 'production' &&
    props.target &&
    props.target !== '_self'
  ) {
    return <OutboundLink {...props}>{children}</OutboundLink>
  } else {
    return <a {...props}>{children}</a>
  }
}

export default ExternalLink
