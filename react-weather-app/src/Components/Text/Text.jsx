import React from 'react'

const Text = ({ text, variant = 'p', className }) => {
  const HtmlTag = variant
  return (
    <HtmlTag className={className}>{text}</HtmlTag>
  )
}

export default Text