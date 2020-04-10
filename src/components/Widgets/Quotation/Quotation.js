import React from 'react'

// :: ---

const Quotation = ({ cite, children }) => {
  return (
    <figure>
      <blockquote>
        {children}
        <footer>
          <cite>{cite}</cite>
        </footer>
      </blockquote>
    </figure>
  )
}

export default Quotation
