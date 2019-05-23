import React from 'react';
import Rater from './Rater.jsx';
  class Product extends React.Component{
      
  constructor(){
    super();
    
  }

   
  render(){
    return(
      <div>
        <div >
          <img src= "Images/react.PNG" className="img img-rounded img-responsive"/>
          <div>
            <a ><h3>Gamia Laptop</h3></a>
              <h4><span style={"color:red"}>Rs. 33000</span></h4>
              <p>An excellent choice for an awesome gaming experience.</p>}
              <Rater />
              <span style={"fontSize:9px"}>3/5</span>
          </div>
        </div>
      </div>
    )
  }
}
export default Product;