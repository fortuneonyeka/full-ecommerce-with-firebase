import React from 'react'
import { useParams } from "react-router-dom"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addItem, delItem } from "../Redux/Actions/actions"
import { fireproducts } from "../products/Fireproducts"
import { doc, getDoc } from "firebase/firestore";
import fireDB from "../fireConfig";
import { useEffect } from "react"







const Details = ({productDetails, closeModalProp}) => {
  const [product, setProduct] = useState([]);
  const params = useParams();

  const getData = async () => {
      try {
       const productTemp = await getDoc(doc(fireDB, "products",params.productid));
        
        console.log(productTemp.data());
      setProduct(productTemp.data());
      } catch (error) {
        console.log(error);
       }
    };
  
    useEffect(() => {
     getData()
     },[])
  
 
  
  const proDetail = fireproducts.filter(x=>x.id === params.name)
  // const product = proDetail[1]
  console.log(product);
  const dispatch = useDispatch()


  const [cartBtn, setCartBtn] = useState("Add To Cart")

  const handleCart = (product) => {
    if (cartBtn === "Add To Cart") {
      dispatch(addItem(product))
      setCartBtn("Remove From Cart")
    }else {
      dispatch(delItem(product))
      setCartBtn("Add To Cart")
    }
  }
  return (
    <div className="w-screen fixed flex justify-center items-center bg-gray-400 bg-opacity-30 productDetails">
      <div className="p-8 card">
        <div className="flex justify-center items-center mb-4">
        <button onClick={closeModalProp} className="btn btn-outline-danger mr-4 p-2  w-50  font-bold">Close</button>
       <button onClick={() => handleCart(proDetail)} className="btn btn-outline-primary  w-50 p-2">{cartBtn}</button>
        </div>
      
          <div >
              <img src={productDetails.imageURL} alt="productDetails" height="600px" width="500px" />
          </div>
          <div className="bg-black text-white rounded p-4">
            <h2 className=" text-base leading-none">${productDetails.price}</h2>
            <h2 className=" text-base leading-none break-normal">Desc: {productDetails.description}</h2>
          </div>
         
    </div>
    </div>
  )
}

export default Details