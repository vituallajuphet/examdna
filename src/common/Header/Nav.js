import React from 'react';
import { NavLink } from 'react-router-dom'


function Header() {

    const navList = [
        {
          id: '1',
          label: 'Home',
          exact: true,
          to: '/'
        },
        {
          id: '2',
          label: 'About',
          exact: true,
          to: '/about'
        }
      ]

    const lists = navList.map((lst) =>
      <NavLink
        className='nav__menu--itemLink'
        activeClassName='active-itemLink'
        to={navList.to}
      >
        {navList.label}
      </NavLink>
    );
    console.log(lists)

  return (
  <div>{lists}</div>
  )
}

export default Header
