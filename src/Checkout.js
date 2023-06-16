import ProductList from "./ProductList";
import QuantityBtn from "./QuantityBtn";
import Title from "./Title";
import { Link } from "react-router-dom";
export default function Checkout() {
  let cartItem = {
    cartItems:  [
        {
            "id": 5,
            "name": "藍梅",
            "image": "blueberry.jpg",
            "price": 10,
            "description": "新鮮藍梅50克，補眼之寶",
            "quantity": 3
        },
        {
            "id": 4,
            "name": "西瓜",
            "image": "watermelon.jpg",
            "price": 20,
            "description": "新鮮西瓜2公斤，夏季必備",
            "quantity": 1
        }
    ]
  };

  // destructure cartItem
  let { cartItems } = cartItem;
  let cartEmpty = cartItems.length <= 0 ? true : false; // check if the cart is empty, if so let Y else N

  // grandTotal
  let grandTotal = cartItems.reduce((total, product) => {
    return total += product.price * product.quantity
  },0  )
  let freeShippingPrice = 99


  return (
    <>
      <Title mainTitle="你的購物車" />

      {
        /* if the cart is empty, then dun display */
        cartEmpty && (
          <div>
            購物車現在沒有商品 <br />
            <Link to="/"> 去產品頁看看吧</Link>
          </div>
        )
      }
      {
        /* if the cart is not empty, if not - which is true, then display */
        !cartEmpty && (
          <div>
            {/* left side - i.e., 產品列表*/}
            <div id="cartSection">
              {cartItems.map(product => 
               (
                <div key={product.id}>
                  <img src={process.env.PUBLIC_URL + "/img/" + product.image}/>                 
                  {product.name}
                  {product.description}
                  {product.price}
                  {product.quantity}
                  <QuantityBtn/>
                </div>
                )
              )}
            </div>

            {/* right side - i  .e., 價錢總數 + 免費送貨*/}
            <div id="checkOutSection"> 
            {/* 價錢總數 */}
            <div> 全部貨品總共： </div> 
            <div> {grandTotal} </div>

            {            /* 免費送貨 */
            grandTotal >= freeShippingPrice ?
            <div> 我們免費送貨 </div> :
            <div> 滿${freeShippingPrice} 免費送貨 <br/> 還差 $ {freeShippingPrice - grandTotal}</div> 
            }
            
            
        
            </div>
          </div>
        )
      }
    </>
  );
}
