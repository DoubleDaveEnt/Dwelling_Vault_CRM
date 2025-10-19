import React, { useEffect, useState } from 'react'

export default function Dashboard(){
  const [health, setHealth] = useState(null)
  useEffect(()=>{
    const url = import.meta.env.VITE_API_URL || 'http://localhost:8086/health'
    fetch(url).then(r=>r.json()).then(setHealth).catch(()=>setHealth({ok:false}))
  },[])

  return (
    <div className="grid">
      <section><h3>Outstanding Engagements</h3><div className="stub">—</div></section>
      <section><h3>Tasks Due Today</h3><div className="stub">—</div></section>
      <section><h3>Open Properties</h3><div className="stub">—</div></section>
      <section><h3>Meetings</h3><div className="stub">—</div></section>
      <footer className="api">API health: <code>{JSON.stringify(health)}</code></footer>
    </div>
  )
}
