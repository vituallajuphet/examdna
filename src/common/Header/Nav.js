import React from 'react';
import { NavLink } from 'react-router-dom'

class Nav extends React.Component {

    

    render() {
        
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
            {...navList}
          >
            {navList.label}
          </NavLink>
        );

        return  <div>{lists}</div>;
    }
}

export default Nav;