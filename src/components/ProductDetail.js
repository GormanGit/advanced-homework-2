import React from "react";

function ProoductDetail(props) {

  return(

    <div className="grid_1_of_5 images_1_of_5">
      <img src={props.products.imgUrl} />
      <h3>{props.products.name}</h3>
      <p>{props.products.description}</p>
      <h4>{props.products.price}</h4>
      <div className="button"><span><a href="singlepage.html">Read More</a></span></div>
    </div>

  );
}
export default ProoductDetail;