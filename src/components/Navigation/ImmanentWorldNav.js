import React from 'react'
import { Link } from 'react-router-dom'
import itemsData from '../data/immanentWorldItems.json'

export default function ImmanentWorldNav() {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {itemsData.map((item, index) => (
        <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <img
            src={item.thumbnail}
            alt={item.title}
            style={{ width: '50px', height: '50px', marginRight: '10px', borderRadius: '5px' }}
          />
          <Link to={item.link} style={{ textDecoration: 'none', color: '#333', fontSize: '16px' }}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}
