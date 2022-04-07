import React from "react";
import { NavLink } from "react-router-dom";

const Expo = () => {
  return (
     
   <div class="container bg-white">
 
  <div class="row">
     <div class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
         <div class="product"> <img src="./images/imgtra/imgt3.jpg" alt=""/>
             <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
                 <li class="icon"><span class="fas fa-expand-arrows-alt"></span></li>
                 <li class="icon mx-3"><span class="far fa-heart"></span></li>
                 <li class="icon"><span class="fas fa-shopping-bag"></span></li>
             </ul>
         </div>
         <div class="tag bg-red">indisponible</div>
         <div class="title pt-4 pb-1">Winter Sweater</div>
         <div class="d-flex align-content-center justify-content-center"> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> </div>
         <div class="price">$ 60.0</div>
     </div>
    </div>

    </div>
  );
};

export default Expo;
