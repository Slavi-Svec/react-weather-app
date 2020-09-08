import React from 'react'
import './styles.scss'

const Text = ({ text, variant = 'p', className }) => {
  const HtmlTag = variant
  return (
    <HtmlTag className={className}>{text}</HtmlTag>
  )
}

export default Text