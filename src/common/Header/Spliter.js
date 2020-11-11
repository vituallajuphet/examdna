import React from 'react'
import Nav from './Nav'



function Spliter(props) {

  return (
    <div className="wrapper">
        <div className="appLogo">
            Logo Here
        </div>
        <div className="appNav">
            {Nav}
        </div>
        <div className="clearfix"></div>
    </div>
  )
}

export default Spliter
