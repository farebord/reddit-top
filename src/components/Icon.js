import React from 'react'

const Icon = ({ icon, fontAwesomeExtras = 'fas', className}) => {
  return <i className={`${fontAwesomeExtras} fa-${icon} ${className}`} />
}

export default Icon