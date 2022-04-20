import React from 'react'

const Details = ({productDetails, closeModalProp}) => {
  return (
    <div className="w-screen  mb-24 fixed flex justify-center items-center bg-gray-400 bg-opacity-30 productDetails">
      <div className="bg-white p-8 card">
        <div className="flex justify-center items-center mb-4">
        <button onClick={closeModalProp} className="btn btn-outline-danger mr-4 p-2  w-50  font-bold">Close</button>
       <button className="btn btn-outline-primary  w-50 p-2">Add To Cart</button>
        </div>
      
          <div >
              <img src={productDetails.imageURL} alt="productDetails" height="700px" width="700px" />
          </div>
          <div >
            <hr />
            <h2 className=" text-base">${productDetails.price}</h2>
            <h2 className=" text-base">${productDetails.description}</h2>
          </div>
         
    </div>
    </div>
  )
}

export default Details