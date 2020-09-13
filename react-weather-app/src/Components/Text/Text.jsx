import React from 'react'

const Text = ({ text, variant = 'p', className, showUniCode }) => {
  const HtmlTag = variant
  return (
    <>
      <HtmlTag className={className}>{text} {showUniCode && <span>&#176;</span>}</HtmlTag>
    </>
  )
}

export default Text



