import React from "react";
import { useState,useEffect } from "react";
import Layout from "../Components/Layout";
import { collection, getDocs } from "firebase/firestore";
import fireDB from "../fireConfig";
// import { fireproducts } from "../products/Fireproducts";
import Details from "./Details";


const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null)

  const closeModal = () => {
    setSelectedProduct(null)
  }


  const getData = async () => {
    try {
      const products = await getDocs(collection(fireDB, "products"));
      const productsArray = [];
      products.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const obj = {
          id: doc.id,
          ...doc.data(),
        };
        productsArray.push(obj);
      });

      setProducts(productsArray);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData()
  },[])

  // const addProductData =  async () => {
  //  fireproducts.map(async (product) => {
  //     try {
  //       await addDoc(collection(fireDB, "products"), product);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })
  // };
  return (
    <Layout>
      <div>
      {selectedProduct && <Details  productDetails={selectedProduct} closeModalProp={()=>closeModal()} /> }
     
     
      {products.length > 0 && (
       
        <div className="">
          <div className="container flex justify-center">
          <form action=" " className="mt-4">
            <input className="border border-4  mr-4 mb-2 p-2 w-96 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="search items" />
            <input className="border border-4 p-2 w-96 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"  type="text" placeholder="All" />
          </form>
          </div>
          <ul className="grid grid-cols-5 ">
          {products.map(product => (
            <li key={product.id} onClick={()=>setSelectedProduct(product)} className=" rounded shadow-lg m-2 p-4 hover:bg-purple-600 hover:text-white hover:italic transform motion-safe:hover:scale-95  "> 
            <div className="text-center">
            <img className="h-auto"  src={product.imageURL} alt="product" /> <hr />
            </div>
            <p className="text-center ">NAME: {product.name} </p> <hr />
            <p className="text-center">PRICE: ${product.price}</p> <hr />
            {/* <p className="text-center lg:text-base">CATEGORY: {product.id}</p> <hr /> */}
            {/* <p className="text-center lg:text-base ">DESCRIPTION: {product.description}</p> */}
            </li>
          ))}
          </ul>
          
        </div>
       
      )}
    </div>
    </Layout>
  );
};
export default HomePage

