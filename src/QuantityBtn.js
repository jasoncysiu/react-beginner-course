import React, { useState } from "react";

export default function QuantityBtn() {
  let [numInCart, setNumInCart] = useState(0);

const handAdd = () => {setNumInCart(numInCart + 1)}
const handSubtract = () =>  {setNumInCart(numInCart - 1)}

  return (
    <div>
      {
      (numInCart === 0) ? (
        <div onClick={handAdd}>加入購物車</div>
      ) : 
       ( <div>
          <span onClick={handSubtract}>-</span>
          {numInCart}件
          <span onClick={handAdd}>+</span>
        </div>)
      }
    </div>
  )
}
