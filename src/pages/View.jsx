import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addTowishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';

const View = () => {
  const userCart = useSelector(state=>state.cartReducer)
  const dispatch  = useDispatch()
  const userWishlist = useSelector(state=>state.wishlistReducer)
  const [product, setProduct] = useState({});
  const { id } = useParams();
  console.log(id);
  console.log(product);
  
  

  useEffect(() => {
    if (sessionStorage.getItem('allProducts')) {
      const allProducts = JSON.parse(sessionStorage.getItem('allProducts'));
      const foundProduct = allProducts.find(item => item.id == id);
      setProduct(foundProduct || {});
    }
  }, [id]);

  const handleWishlist = ()=>{
    const existingProduct = userWishlist?.find(item=>item?.id ==id)
    if(existingProduct){
      alert("Product Already Exist In Wishlist!!!")
    }else{
      dispatch(addTowishlist(product))
      alert("Product added to Wishlist!!!")
    }
  }
  const handleCart = ()=>{
    dispatch(addToCart(product))
    const existingProduct = userCart?.find(item=>item?.id ==id)
    if(existingProduct){
      alert("Product quantity incremented!!!")
    }else{
      alert("Product added to cart!!!")
    }
  }


  return (
    <>
      <Header />
      <div className="container mx-auto px-5 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Product Image and Buttons */}
          <div className="text-center">
            <img
              className="mx-auto rounded-lg shadow"
              src={product?.thumbnail || 'https://via.placeholder.com/250'}
              alt="Product Thumbnail"
              style={{ height: '350px', width: '250px' }}
            />
            <div className="flex justify-center gap-4 mt-5">
              <button onClick={handleWishlist} className="bg-blue-600 rounded text-white px-5 py-2">
                Add to Wishlist
              </button>
              <button onClick={handleCart} className="bg-green-600 rounded text-white px-5 py-2">
                Add to Cart
              </button>
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h3 className="font-bold text-gray-700">PID: {product?.id}</h3>
            <h1 className="text-4xl font-bold my-3">{product?.title}</h1>
            <h4 className="font-bold text-red-600 text-2xl mb-3">
              $ {product?.price}
            </h4>
            <h4 className="mb-2">Brand: {product?.brand}</h4>
            <h4 className="mb-2">Category: {product?.category}</h4>
            <p>
              <span className="font-bold">Description:</span> {product?.description || 'No description available.'}
            </p>

            {/* Reviews */}
            <h3 className="font-bold mt-8 mb-4">Client Reviews</h3>
            {product?.reviews?.length > 0 ? (
              product?.reviews.map(item => (
                <div
                  key={item.date}
                  className="shadow border rounded-lg p-4 mb-3 bg-gray-100"
                >
                  <h5>
                    <span className="font-bold">{item?.reviewerName}</span> :{' '}
                    <span>{item?.comment}</span>
                  </h5>
                  <p className="text-yellow-500">
                    Rating: {item.rating} <i className="fa-solid fa-star"></i>
                  </p>
                </div>
              ))
            ) : (
              <div className="font-bold text-red-600">
                No Reviews Yet!!!
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
