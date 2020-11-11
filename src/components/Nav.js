import React from 'react';

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
          <li className="nav-list"><a href="/">{lst}</a></li>
        );

        return (
          <div class="appHeadContainer">
              <div className="wrapper">
                  <div className="appLogo">
                      Logo Here
                  </div>
                  <div className="appNav">
                    <nav>
                        <ul>
                            {lists}
                        </ul>
                    </nav>
                  </div>
                  <div className="clearfix"></div>
              </div>
          </div>
        );
    }
}

export default Nav;