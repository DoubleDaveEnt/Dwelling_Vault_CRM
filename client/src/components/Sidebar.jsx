import React from 'react'
import { NavLink } from 'react-router-dom'

const Item = ({to, children}) =>
  <NavLink className={({isActive}) => isActive ? 'nav active' : 'nav'} to={to}>{children}</NavLink>

export default function Sidebar(){
  return (
    <aside className="sidebar">
      <Item to="/dashboard">Dashboard</Item>
      <Item to="/calendar">Calendar</Item>
      <Item to="/properties">Properties</Item>
      <Item to="/contacts">Contacts</Item>
      <Item to="/activities">Activities</Item>
      <Item to="/documents">Documents</Item>
      <Item to="/settings">Settings</Item>
    </aside>
  )
}
