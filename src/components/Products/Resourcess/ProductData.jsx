import React, { useState, useEffect } from "react";
import Card from "./Card";
import './ProductData.css'

const ProductData = () => {
  const [data, setData] = useState({})
  let apiData = []

  useEffect(() => {
    fetch(
      "https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json "
    )
      .then((res) => res.json())
      .then((res) => {
        for (const item in res) {
          apiData.push(res[item]);
        }
        setData(apiData);
      });
  }, []);
// console.log(apiData)

  let allCard = ''
  console.log(data)
  if (data.length > 0) {
    allCard = data.map((item) => (
      <Card id={item.id}
      // key={item.key}
        name={item['productName']}
        img={item['productImage']}
        oldPrice={item['oldPrice']}
        newPrice={item['newPrice']}

      />
    ))
  }
  // console.log(allCard)
  return (
    <div>
      <h1 className="heading">Products</h1>
      <div className="all-card-container" style={{ display: 'flex' }}>
        {allCard}
      </div>

    </div>
  )

}

export default ProductData

// export  default allCard