import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div>
        <Link to={'/'}><button>Page1</button></Link>
        <Link to={'page2'}><button>Page2</button></Link>
    </div>
  )
}
