import React, { useState } from 'react'

export default function Header(){
  const [q,setQ] = useState('')
  const create = (type) => alert(`New ${type} (stub)`)

  return (
    <header className="header">
      <div className="brand">DV <span>CRM</span> • Dev</div>
      <div className="search">
        <input
          placeholder="Search people, properties, matters…"
          value={q}
          onChange={e=>setQ(e.target.value)}
        />
        <button onClick={()=>alert(`Search: ${q}`)}>Search</button>
      </div>
      <div className="actions">
        <div className="menu">
          <button className="primary">New ▾</button>
          <div className="menu-list">
            <button onClick={()=>create('Buyer')}>Buyer</button>
            <button onClick={()=>create('Seller')}>Seller</button>
            <button onClick={()=>create('Broker')}>Broker</button>
            <button onClick={()=>create('Contact')}>Contact</button>
            <button onClick={()=>create('Property')}>Property</button>
          </div>
        </div>
      </div>
    </header>
  )
}
