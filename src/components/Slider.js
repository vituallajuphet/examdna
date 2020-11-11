import React from 'react';
import imgs from '../images/slide.png';

export default class Slider extends React.Component {

    constructor(props){
        super(props);

    }
    render() {

        return (
          <div className="slider">
              <div className="wrapper">
                  <div className="sliderCont">
                         <figure>
                             <img src={imgs} alt="img"/>
                         </figure>
                  </div>
                  <div className="sliderText">
                       <h2>Sample Heading...</h2>
                       <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat expedita optio sapiente eum atque modi repudiandae autem perspiciatis molestiae. Quia repellendus neque ipsum quos quidem! Eius asperiores omnis cumque repellat.
                       </p>
                  </div>
              </div>
          </div>
        );
    }
}
