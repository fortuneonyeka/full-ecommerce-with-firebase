import React from 'react'
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import { delItem } from "../Redux/Actions/actions"
import { doc, getDoc } from "firebase/firestore";
// import { collection, getDocs } from "firebase/firestore";
import fireDB from "../fireConfig";
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import Layout from "../Components/Layout"


const CartPage = () => {
  const [product, setProduct] = useState([]);

  const params = useParams();

  // const getData = async () => {
  //   try {
  //     const productTemp = await getDoc(doc(fireDB, "products",params.productid));
      
  //    console.log(productTemp.data());
  //     setProduct(productTemp.data());
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getData()
  // },[])

  
  // const proDetail = product.filter((x)=>x.id === params.productid)
  // const productdet = proDetail
  // // console.log(productdet);
  
    const state = useSelector((state) => state.addItems)
    const dispatch = useDispatch()
  
  
    const handleClose = (item) => {
      dispatch(delItem(item))
    }
  
  
    const cartItems = (cartItem) => {
      return (
        <Layout>
           <div className="px4 my-5 bg-light rounded-3" >
        <div className="container py-4">
          <button onClick={()=>handleClose(cartItem)} className="btn btn-outline-danger btn-close float-end border border-3 border-danger" aria-label="close"></button>
          <div className="row justify-content-center">
            <div className="col-md-4 m-5">
              <img className="py-5 px-5"  width="500px" src={cartItem.imageURL} alt={cartItem.Name} />
            </div>
            <div className="col-md-4 py-5 m-5 px-5">
              <h3 className="text-dark fw-bold mx-3">{cartItem.name}</h3>
              <hr />
              <p className="mx-3 lead fw-bold">${cartItem.price}</p>
              <hr />
              <p className="mx-3 my-5  lead">{cartItem.description}</p>
            </div>
          </div>
        </div>
      </div>
          </Layout>
      )
    }

    const empthycart = () => {
      return (
        <div className="px4 my-5 bg-light rounded-3 py-5">
          <div className="container py-4">
            <h3 className="text-center text-warning fw-bold pt-2">Your Cart Is Empty! please choose from our list of <NavLink className="text-decoration-none" to="/">products</NavLink> </h3>
          </div>
          </div>
      )
    }

    const button = () => {
      return (
        <div className="container">
          <div className="row">
            <NavLink to="/checkout" className="btn btn-outline-primary w-25 mb-5 mx-auto py-3">Proceed to checkout</NavLink>
          </div>
        </div>
      )
    }
    return (
      <>
      {state.length === 0 && empthycart()}
        {state.length !== 0 && state.map(cartItems)}
        {state.length !== 0 && button()}
      </>
    )
  }
  


export default CartPage