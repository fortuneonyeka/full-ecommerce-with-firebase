import React from "react";
import { useState } from "react";
import Layout from "../Components/Layout";
import { collection, addDoc, getDocs } from "firebase/firestore";
import fireDB from "../fireConfig";
// import { fireproducts } from "../products/Fireproducts";
import { useEffect } from "react";

const HomePage = () => {
  const [products, setProducts] = useState([]);

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
      {/* {selectedVehicle && <Details  vehicle={selectedVehicle} closeModalProp={()=>closeModal()}/> } */}
     
      {products.length > 0 && (
       
        <div>
          <ul className="grid grid-cols-5">
          {products.map(product => (
            <li key={products.id} className="border rounded m-2 p-2 "> 
            <img  src={product.imageURL} alt="product photo" /> <hr />
            <h5 className="text-center">NAME: {product.name} </h5> <hr />
            <h5 className="text-center">PRICE: ${product.price}</h5> <hr />
            <h5 className="text-center">CATEGORY: {product.category}</h5> <hr />
            <h5 className="text-center">DESCRIPTION:{product.description}</h5>
            </li>
          ))}
          </ul>
          
        </div>
       
      )}
    </div>
    </Layout>
  );
};

export default HomePage;
