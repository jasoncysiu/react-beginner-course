import {Link} from "react-router-dom"
import styles from './ProductList.module.css'
import {useEffect, useState} from "react"  //React Hook
import Title from "./Title"

export default function ProductList() {

    let [productList,setProductList ] = useState ([]) //initial value of productlist， which 係一個空ge array



    useEffect(() => {
    // We use fetch() to fetch API information (Json format)
    fetch('https://hoyinleung.github.io/demoapi/react-basic-product.json')
    .then(reponse => reponse.json())
    .then(data => setProductList( data )) 
    console.log(productList)
    },
    [])

    return (
        <div>

            <Title mainTitle="請選擇要購買的水果" />
            
            <div>
                {
                    productList.map(product=>(
                        <div className={styles.productBorder} key={product.id}>
                            {product.name}<br/>
                            {product.price}<br/>
                            <Link to={'/product/'+product.id}>
                            <img src={process.env.PUBLIC_URL+'/img/'+product.image} />
                            </Link>
                            <br/>
                            {product.description}<br/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
